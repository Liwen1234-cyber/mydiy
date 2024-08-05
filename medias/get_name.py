import os
import json

def extract_image_names(folder_path, base_url):
    result = []
    
    # 支持的图片文件扩展名
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.JPG', '.JPEG', '.PNG', '.GIF', '.BMP')
    
    # 遍历文件夹
    for filename in os.listdir(folder_path):
        if filename.lower().endswith(image_extensions):
            # 构建完整的URL
            full_url = f"{base_url}/{filename}"
            result.append({"img_url": full_url})
    
    return json.dumps(result, indent=2)

# 指定文件夹路径和基础URL
folder_path = "F:/个人文件/博客/hexo/mydiy/themes/itsneko/source/medias/qiqi"  # 替换为您的图片文件夹路径
base_url = "https://minddiy.top//medias/qiqi"  # 替换为您的基础URL

# 提取图片名称并格式化输出
formatted_output = extract_image_names(folder_path, base_url)
print(formatted_output)