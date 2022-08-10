from PIL import Image
import pytesseract
import urllib.request

urllib.request.urlretrieve(
  'https://i.imgur.com/MCXaccG.png',
   "gfg.png")
  
img = Image.open("gfg.png")
text = pytesseract.image_to_string(img, lang="eng")
print(text)
img.show()