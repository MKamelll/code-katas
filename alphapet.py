'''
  this function finds the missing letter
  in a given letter sequence and returns it

'''

def find_missing_letter(chars):
    lower_or_upper = str(chars).islower()
    sorted_list = sorted(chars)
    caps = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    small = [i.lower() for i in caps]
    if lower_or_upper == True:
      start = small.index(sorted_list[0])
      finish = small.index(sorted_list[-1])
      sliced = small[start:finish + 1]
      value = ''.join(set(sliced) - set(sorted_list))
      if value:
        return value
      else:
        return 'Nothing missing'
    else:
      start = caps.index(sorted_list[0])
      finish = caps.index(sorted_list[-1])
      sliced = caps[start:finish + 1]
      value = ''.join(set(sliced) - set(sorted_list))
      if value:
        return value
      else:
        return 'Nothing missing'
      
# test
print(find_missing_letter(['E','C','B','A']))