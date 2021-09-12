def print_sum_question(start_number,end_number):
    res = ""
    total = 0
    for i in range(start_number,end_number+1):
        res += str(i)+" + " 
        total += i
    newres = res [:-2] + "= "+str(total)
    print(newres)
print_sum_question(3,3)