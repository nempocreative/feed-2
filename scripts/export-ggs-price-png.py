"""Prebuild print-ready PNGs of the GGS A4 menu (one per page, 300 dpi).

Run against the running preview: python3 scripts/export-ggs-price-png.py
Each A4 sheet is pinned to 620 x 877 CSS px and captured at device scale 4,
giving exactly 2480 x 3508 px (A4 at 300 dpi). Uses the same static print
fonts as the PDF export. Output goes to /tmp/ggs-price-png; upload the files
with lovable-assets and point the app's PNG buttons at the new pointers.
"""
import asyncio
import importlib.util
import io
from pathlib import Path

from PIL import Image
from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parents[1]
OUT = Path('/tmp/ggs-price-png')

spec = importlib.util.spec_from_file_location('pdfexport', ROOT / 'scripts/export-ggs-price-pdf.py')
pdfexport = importlib.util.module_from_spec(spec)
spec.loader.exec_module(pdfexport)


async def main():
    faces = ''.join(pdfexport.font_face(*args) for args in [
        ('Jost', 400), ('Jost', 500), ('Jost', 400, True),
        ('Playfair Display', 700), ('Playfair Display', 500, True),
        ('Archivo Black', 400), ('Outfit', 700),
    ])
    OUT.mkdir(parents=True, exist_ok=True)
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 900, 'height': 1200}, device_scale_factor=4)
        await page.goto('http://localhost:8080/ggs-price-list', wait_until='networkidle')
        await page.locator('.ggpr-page').first.wait_for()
        await page.add_style_tag(content=faces + '''
          .ggpr-root {font-family: "Print Jost", sans-serif;}
          .ggpr-title,.ggpr-subtitle,.ggpr-tagline strong,.ggpr-tagline em
            {font-family: "Print Playfair Display", serif;}
          .ggpr-label {font-family: "Print Archivo Black", sans-serif;}
          .ggpr-footer-text {font-family: "Print Outfit", sans-serif;}
          .ggpr-toolbar,.ggpr-page-no {display: none !important;}
          .ggpr-pages {display: block !important; padding: 0 !important;}
          .ggpr-page-wrap {width: 620px !important; margin: 0 0 40px !important; padding: 0 !important;}
          .ggpr-page {width: 620px !important; height: 877px !important;
                      aspect-ratio: auto !important; box-shadow: none !important;}
        ''')
        await page.evaluate('''async () => {
          await document.fonts.ready;
          await Promise.all([...document.images].map(img => img.decode()));
          const root = document.querySelector('.ggpr-pages');
          const rows = [...root.querySelectorAll('.ggpr-row')];
          let fit = 1;
          root.style.setProperty('--fit', fit);
          while(fit > .6 && rows.some(r => r.scrollWidth > r.clientWidth + 1)) {
            fit -= .02; root.style.setProperty('--fit', fit.toFixed(2));
          }
          await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        }''')
        sheets = page.locator('.ggpr-page')
        count = await sheets.count()
        for i in range(count):
            raw = await sheets.nth(i).screenshot(animations='disabled')
            im = Image.open(io.BytesIO(raw)).convert('RGB')
            if im.size != (2480, 3508):
                im = im.resize((2480, 3508), Image.LANCZOS)
            path = OUT / f'GGS-Price-List-A4-Halaman-{i + 1}.png'
            im.save(path, dpi=(300, 300))
            print(path, im.size)
        await browser.close()


if __name__ == '__main__':
    asyncio.run(main())
