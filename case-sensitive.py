'''
    returns the number of repeated elements in
    a given string
'''
def duplicate_count(text):
    text_chars = list(str(text).lower())
    track_number = {}
    for char in text_chars:
        if char in track_number:
            track_number[char] += 1
        else:
            track_number[char] = 1
    
    counter = 0
    for value in track_number:
        if track_number[value] > 1:
            counter += 1
    return counter

#test
#duplicate_count('Indivissibility')
print(duplicate_count('abcd'))