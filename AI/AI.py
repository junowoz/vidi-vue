import os
from tkinter import image_names, image_types
from PIL import Image, ImageStat

image_folder = r"/home/udyax/Desktop/Code_/insurtech/Watcher/images_database"
image_files = [_ for _ in os.listdir(image_folder) if _.endswith("jpg")]

duplicate_files = []
for file_org in image_files:
    if not file_org in duplicate_files:
        image_org = Image.open(os.path.join(image_folder, file_org))
        pix_mean1 = ImageStat.Stat(image_org).mean

        for file_check in image_files:
            if file_check != file_org:
                image_check = Image.open(os.path.join(image_folder, file_check))
                pix_mean2 = ImageStat.Stat(image_check).mean

                if pix_mean1 == pix_mean2:
                    duplicate_files.append(file_org)
                    duplicate_files.append(file_check)

print(
    "Foram encontradas "
    + str(len(duplicate_files))
    + " cópias iguais do seu NFT "
    + str(file_check)
)
