# 基础语法项目

> 适合零基础或刚入门 Python 的学习者

## 项目列表

### 1. 猜数字游戏

**目标**：巩固随机数、条件判断和循环

```python
import random

def guess_number():
    number = random.randint(1, 100)
    attempts = 0
    
    while True:
        guess = int(input("猜一个 1-100 的数字: "))
        attempts += 1
        
        if guess < number:
            print("太小了！")
        elif guess > number:
            print("太大了！")
        else:
            print(f"恭喜！你用了 {attempts} 次猜对了！")
            break

guess_number()
```

**知识点**：`random` 模块、`while` 循环、`if-elif-else`

---

### 2. 待办事项列表

**目标**：练习列表操作和函数封装

```python
todos = []

def add_todo(task):
    todos.append({"task": task, "done": False})
    print(f"已添加: {task}")

def list_todos():
    for i, todo in enumerate(todos, 1):
        status = "✓" if todo["done"] else "○"
        print(f"{i}. [{status}] {todo['task']}")

def complete_todo(index):
    if 0 <= index < len(todos):
        todos[index]["done"] = True
        print(f"已完成: {todos[index]['task']}")

# 示例
add_todo("学习 Python")
add_todo("做练习题")
list_todos()
```

**知识点**：列表、字典、函数、索引操作

---

### 3. 文件批处理工具

**目标**：掌握文件读写和字符串处理

```python
import os

def batch_rename(folder, old_ext, new_ext):
    """批量修改文件扩展名"""
    for filename in os.listdir(folder):
        if filename.endswith(old_ext):
            new_name = filename.replace(old_ext, new_ext)
            os.rename(
                os.path.join(folder, filename),
                os.path.join(folder, new_name)
            )
            print(f"重命名: {filename} -> {new_name}")

# 使用示例
# batch_rename("./my_files", ".txt", ".md")
```

**知识点**：`os` 模块、文件操作、字符串方法
