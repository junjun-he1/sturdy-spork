# 数据分析项目

> 使用 Pandas、NumPy、Matplotlib 进行数据处理与可视化

## 前置要求

```bash
pip install pandas numpy matplotlib
```

## 项目列表

### 1. CSV 数据清洗工具

**目标**：清洗销售数据，处理缺失值和异常值

```python
import pandas as pd

# 读取数据
df = pd.read_csv('sales_data.csv')

# 查看数据概况
print(df.info())
print(df.describe())

# 清洗步骤
df = df.drop_duplicates()                      # 去重
df['price'] = df['price'].fillna(df['price'].median())  # 填充缺失值
df = df[df['price'] > 0]                       # 过滤异常值

# 保存清洗后的数据
df.to_csv('sales_data_cleaned.csv', index=False)
print(f"清洗完成，剩余 {len(df)} 条记录")
```

**知识点**：`pandas` 数据读取、去重、缺失值处理、条件过滤

---

### 2. 销售数据可视化

**目标**：用 Matplotlib 生成销售趋势图表

```python
import pandas as pd
import matplotlib.pyplot as plt

# 读取数据
df = pd.read_csv('sales_data_cleaned.csv')
df['date'] = pd.to_datetime(df['date'])

# 按月汇总
monthly = df.groupby(df['date'].dt.to_period('M'))['amount'].sum()

# 绘制折线图
plt.figure(figsize=(10, 6))
monthly.plot(kind='line', marker='o')
plt.title('月度销售额趋势')
plt.xlabel('月份')
plt.ylabel('销售额')
plt.grid(True)
plt.savefig('sales_trend.png')
plt.show()
```

**知识点**：`groupby` 聚合、`to_datetime` 转换、`matplotlib` 绘图

---

### 3. 数据报表自动生成

**目标**：汇总统计并生成 HTML 报表

```python
import pandas as pd

def generate_report(data_file, output_file='report.html'):
    df = pd.read_csv(data_file)
    
    summary = {
        '总记录数': len(df),
        '平均价格': f"{df['price'].mean():.2f}",
        '最高价格': f"{df['price'].max():.2f}",
        '最低价格': f"{df['price'].min():.2f}",
    }
    
    # 生成简单 HTML 报表
    html = f"""
    <html>
    <head><title>数据报表</title></head>
    <body>
        <h1>销售数据报表</h1>
        <table border="1">
            {''.join(f'<tr><td>{k}</td><td>{v}</td></tr>' for k, v in summary.items())}
        </table>
    </body>
    </html>
    """
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)
    print(f"报表已生成: {output_file}")

generate_report('sales_data_cleaned.csv')
```

**知识点**：数据统计、字符串格式化、HTML 生成
