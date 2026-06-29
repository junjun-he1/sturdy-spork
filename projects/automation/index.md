# 自动化脚本项目

> 文件处理、爬虫、办公自动化等实用脚本

## 前置要求

```bash
pip install requests beautifulsoup4 openpyxl
```

## 项目列表

### 1. 批量图片下载器

**目标**：根据 URL 列表批量下载图片

```python
import requests
import os
from urllib.parse import urlparse

def download_images(urls, folder='images'):
    os.makedirs(folder, exist_ok=True)
    
    for url in urls:
        try:
            response = requests.get(url, timeout=10)
            filename = os.path.basename(urlparse(url).path)
            filepath = os.path.join(folder, filename)
            
            with open(filepath, 'wb') as f:
                f.write(response.content)
            print(f"下载成功: {filename}")
        except Exception as e:
            print(f"下载失败 {url}: {e}")

# 使用示例
urls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
]
# download_images(urls)
```

**知识点**：`requests` 下载、`os.makedirs`、URL 解析

---

### 2. Excel 报表合并工具

**目标**：合并多个 Excel 文件的数据

```python
import pandas as pd
import glob

def merge_excel_files(pattern, output_file='merged.xlsx'):
    """合并符合模式的所有 Excel 文件"""
    files = glob.glob(pattern)
    all_data = []
    
    for file in files:
        df = pd.read_excel(file)
        df['来源文件'] = os.path.basename(file)
        all_data.append(df)
    
    merged = pd.concat(all_data, ignore_index=True)
    merged.to_excel(output_file, index=False)
    print(f"已合并 {len(files)} 个文件，输出: {output_file}")
    return merged

# 使用示例
# merge_excel_files('sales_*.xlsx', 'total_sales.xlsx')
```

**知识点**：`pandas` 读取 Excel、`glob` 文件匹配、`pd.concat`

---

### 3. 邮件自动发送脚本

**目标**：批量发送定制化邮件

```python
import smtplib
from email.mime.text import MIMEText
from email.header import Header

def send_email(sender, password, receiver, subject, content):
    msg = MIMEText(content, 'plain', 'utf-8')
    msg['From'] = sender
    msg['To'] = receiver
    msg['Subject'] = Header(subject, 'utf-8')
    
    with smtplib.SMTP_SSL('smtp.qq.com', 465) as server:
        server.login(sender, password)
        server.sendmail(sender, [receiver], msg.as_string())
    print(f"邮件已发送至 {receiver}")

# 批量发送
def batch_send(sender, password, recipients, template):
    for name, email in recipients.items():
        content = template.format(name=name)
        send_email(sender, password, email, "活动通知", content)

# 使用示例
# recipients = {"张三": "zhangsan@example.com", "李四": "lisi@example.com"}
# template = "尊敬的 {name}，您好！请查收本月活动安排。"
# batch_send("your_email@qq.com", "your_password", recipients, template)
```

**知识点**：`smtplib` 邮件发送、`MIMEText` 邮件格式、批量处理
