# 🔍 Algorithm Search Comparison

A JavaScript implementation comparing the performance of **Linear Search** vs **Binary Search** on sorted arrays. This project demonstrates the dramatic difference in efficiency between O(n) and O(log n) algorithms.

## 🚀 Features

- **Linear Search** - Simple iterative search (O(n) complexity)
- **Binary Search** - Divide and conquer approach (O(log n) complexity)  
- **Performance Benchmarking** - Console.time measurements
- **Ready-to-Run** - No dependencies required

## 📊 Performance Results

On an array of 1,000,000 elements:

| Algorithm | Time Complexity | Execution Time | Result |
|-----------|----------------|----------------|---------|
| Linear Search | O(n) | ~125ms | ✅ |
| Binary Search | O(log n) | ~0.25ms | ✅ |

**Binary Search is ~500x faster!** 🚀

## 💻 Quick Start

```bash
# Clone or download this file
# Run with Node.js
node search-comparison.js
