# Web 开发项目

> 使用 Flask、FastAPI 等框架开发 Web 应用

## 前置要求

```bash
pip install flask fastapi uvicorn
```

## 项目列表

### 1. Flask 个人博客 API

**目标**：构建 RESTful API，实现文章的增删改查

```python
from flask import Flask, jsonify, request

app = Flask(__name__)

posts = [
    {"id": 1, "title": "Hello Flask", "content": "这是我的第一篇博客"}
]

@app.route('/api/posts', methods=['GET'])
def get_posts():
    return jsonify(posts)

@app.route('/api/posts', methods=['POST'])
def create_post():
    data = request.get_json()
    new_post = {
        "id": len(posts) + 1,
        "title": data['title'],
        "content": data['content']
    }
    posts.append(new_post)
    return jsonify(new_post), 201

@app.route('/api/posts/<int:post_id>', methods=['DELETE'])
def delete_post(post_id):
    global posts
    posts = [p for p in posts if p['id'] != post_id]
    return jsonify({"message": "已删除"})

if __name__ == '__main__':
    app.run(debug=True)
```

**知识点**：Flask 路由、HTTP 方法、`jsonify`、请求处理

---

### 2. FastAPI 图书管理接口

**目标**：使用 FastAPI 构建带自动文档的 API

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="图书管理系统")

class Book(BaseModel):
    id: int
    title: str
    author: str
    price: float

books = []

@app.get("/books")
def list_books():
    return books

@app.post("/books")
def add_book(book: Book):
    books.append(book.dict())
    return {"message": "图书已添加", "book": book}

@app.get("/books/{book_id}")
def get_book(book_id: int):
    for book in books:
        if book['id'] == book_id:
            return book
    return {"error": "图书不存在"}

# 启动: uvicorn main:app --reload
# 文档地址: http://localhost:8000/docs
```

**知识点**：FastAPI、Pydantic 模型、自动 API 文档

---

### 3. 简易 Web 爬虫 + 展示

**目标**：抓取网页数据并在 Web 页面展示

```python
from flask import Flask, render_template_string
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

HTML_TEMPLATE = """
<!DOCTYPE html>
<html>
<head><title>热门新闻</title></head>
<body>
    <h1>今日热门</h1>
    <ul>
    {% for item in news %}
        <li><a href="{{ item.link }}">{{ item.title }}</a></li>
    {% endfor %}
    </ul>
</body>
</html>
"""

@app.route('/')
def index():
    # 示例：抓取数据（此处为模拟）
    news = [
        {"title": "Python 3.14 发布", "link": "#"},
        {"title": "AI 编程助手新进展", "link": "#"},
    ]
    return render_template_string(HTML_TEMPLATE, news=news)

if __name__ == '__main__':
    app.run(debug=True)
```

**知识点**：`requests` 请求、`BeautifulSoup` 解析、模板渲染
