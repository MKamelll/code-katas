'''
    function to check for smallest value and removes
    it from the list and in case of having more than
    one it removes the one with the smallest index
    
'''
def remove_smallest(numbers):
    data = list(numbers)
    if data:
        smallest_index = data.index(find_smallest(data))
        without_smallest_number = data.pop(smallest_index)
    return data

def find_smallest(numbers):
    numbers_sorted = sorted(numbers)
    return numbers_sorted[0]

# test
print(remove_smallest([2,3,2,6,200,15,100]))