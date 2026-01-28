#include "bubble_sort.cpp" // Assuming bubble_sort.h contains the declaration of bubble_sort function
#include <gtest/gtest.h>
#include <vector>

TEST(BubbleSortTest, HandlesEmptyArray) {
  std::vector<int> arr{};
  bubbleSort(arr);
  EXPECT_TRUE(arr.empty());
}

TEST(BubbleSortTest, HandlesSingleElementArray) {
  std::vector<int> arr{42};
  bubbleSort(arr);
  EXPECT_EQ(arr, std::vector<int>({42}));
}

TEST(BubbleSortTest, HandleSortingFiveElements) {
  std::vector<int> arr{64, 34, 25, 12, 22};
  bubbleSort(arr);
  EXPECT_EQ(arr, std::vector<int>({12, 22, 25, 34, 64}));
}

TEST(BubbleSortTest, HandleSortingTenElements) {
  std::vector<int> arr{64, 34, 25, 12, 22, 11, 90, 88, 76, 45};
  bubbleSort(arr);
  EXPECT_EQ(arr, std::vector<int>({11, 12, 22, 25, 34, 45, 64, 76, 88, 90}));
}
