# 机器学习项目

> 使用 Scikit-learn 进行经典算法实战

## 前置要求

```bash
pip install scikit-learn pandas numpy matplotlib
```

## 项目列表

### 1. 房价预测（回归）

**目标**：使用线性回归预测房价

```python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error
import pandas as pd

# 读取数据
df = pd.read_csv('house_prices.csv')

# 特征与标签
X = df[['area', 'rooms', 'floor']]
y = df['price']

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练模型
model = LinearRegression()
model.fit(X_train, y_train)

# 预测与评估
predictions = model.predict(X_test)
mse = mean_squared_error(y_test, predictions)
print(f"均方误差: {mse:.2f}")
print(f"模型系数: {model.coef_}")

# 预测新房
new_house = [[120, 3, 8]]  # 120平, 3室, 8楼
predicted = model.predict(new_house)
print(f"预测价格: {predicted[0]:.2f} 万元")
```

**知识点**：`train_test_split`、线性回归、模型评估

---

### 2. 鸢尾花分类（分类）

**目标**：使用 KNN 算法对鸢尾花进行分类

```python
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import accuracy_score, classification_report

# 加载数据
iris = load_iris()
X, y = iris.data, iris.target

# 划分数据
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 训练 KNN 模型
knn = KNeighborsClassifier(n_neighbors=3)
knn.fit(X_train, y_train)

# 预测
predictions = knn.predict(X_test)

# 评估
accuracy = accuracy_score(y_test, predictions)
print(f"准确率: {accuracy:.2%}")
print(classification_report(y_test, predictions, target_names=iris.target_names))

# 预测新样本
new_sample = [[5.1, 3.5, 1.4, 0.2]]
result = knn.predict(new_sample)
print(f"预测类别: {iris.target_names[result[0]]}")
```

**知识点**：`KNeighborsClassifier`、分类报告、准确率评估

---

### 3. 客户聚类（聚类）

**目标**：使用 K-Means 对客户进行分群

```python
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
import pandas as pd
import matplotlib.pyplot as plt

# 读取客户数据
df = pd.read_csv('customers.csv')
X = df[['age', 'income', 'spending_score']]

# 特征标准化
scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

# K-Means 聚类
kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df['cluster'] = kmeans.fit_predict(X_scaled)

# 查看各群特征
print(df.groupby('cluster')[['age', 'income', 'spending_score']].mean())

# 可视化（收入 vs 消费评分）
plt.scatter(df['income'], df['spending_score'], c=df['cluster'], cmap='viridis')
plt.xlabel('收入')
plt.ylabel('消费评分')
plt.title('客户聚类结果')
plt.colorbar(label='群集')
plt.savefig('clusters.png')
plt.show()
```

**知识点**：`KMeans` 聚类、`StandardScaler` 标准化、数据可视化
