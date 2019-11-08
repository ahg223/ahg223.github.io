var store = [{
        "title": "점자악보 번역기 - Intro",
        "excerpt":"code video 프로젝트 기획 계기 및 의도 군대에서 실청을 경험한 직후라 이러한 기획을 하게 되었다. “전역해서 꼭 타인을 위한 프로젝트를 진행하자”는 목표를 세웠다 프로젝트 중 배운 것 Git을 통한 개발자의 협업 문화를 처음 경험했다. 오픈소스에 문외했었는데 이때 협업을 계기로 그 특이한 문화를 경험하였다. contribute와 pull을 통해 집단에 기여한다는 것이 굉장히...","categories": ["ProjectDesign"],
        "tags": ["ProjectDesign"],
        "url": "http://localhost:4000/projectdesign/BraileCompiler_intro/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_1",
        "excerpt":"''' start,end=map(int,input().split()) sum=0 for i in range(start+1,end): if i%3==0 or i%5==0:sum+=1 print(sum) ''' ''' Num=int(input()) Num1,Num2=Num,Num Binary='' Octat='' while Num1!=0: Binary=str(Num1%2)+Binary Num1=Num1//2 while Num2!=0: Octat=str(Num2%8)+Octat Num2=Num2//8 print(Binary,Octat) ''' ''' Num=int(input()) for i in range(Num): for j in range(Num-i): print(\" \",end=\"\") for j in range(i*2+1): print(\"*\",end=\"\") print(\"\") for i in range(Num-2,-1,-1):...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-1/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_1946",
        "excerpt":"import copy Dir=[[0,1],[0,-1],[1,0],[-1,0]] def DFS(point,Map,Flag): global answer position=copy.deepcopy(point) visited.append(position) if len(visited) &gt; answer: answer = len(visited) for dir in Dir: point[0],point[1]=position[0]+dir[0],position[1]+dir[1] if N&gt;point[0]&gt;-1 and N&gt;point[1]&gt;-1: if point not in visited and Map[position[0]][position[1]]&gt;Map[point[0]][point[1]]: DFS(point,Map,Flag) visited.pop() elif point not in visited and Flag and Map[position[0]][position[1]]&gt;Map[point[0]][point[1]]-K: MMap=copy.deepcopy(Map) MMap[point[0]][point[1]]=Map[position[0]][position[1]]-1 DFS(point, MMap, False) visited.pop() else:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-1946/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_2112",
        "excerpt":"from itertools import product from copy import deepcopy def TESTING(MAP): global K for j in range(len(MAP[0])): FLAG = False count = 1 for i in range(len(MAP)-1): if MAP[i][j] == MAP[i+1][j]: count+=1 else: count = 1 if count&gt;=K: FLAG = True if FLAG == False: return False return FLAG def SIMULATING(MAP,...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-2112/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_2112re",
        "excerpt":"def DFS(films,level,start,W,D,K,pos,i): global result if pos==level: a=check(films,W,D,K) if a: result = 1 return for depth in range(start,D): tmp = films[depth] films[depth]=[i]*W DFS(films,level,depth+1,W,D,K,pos+1,i) if result: return films[depth]=tmp def check(films,W,D,K): for row in range(W+1): if row == W: return True else: count=1 before = films[0][row] for col in range(1,D+1): if col ==...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-2112_/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_2117",
        "excerpt":"def possible(i,j,P,_,Map): temp=0 for n in range(-_+1,_): I=i+n for J in range(j-_+1+abs(n),j+_-abs(n)): if len(Map)&gt;I&gt;-1 and len(Map)&gt;J&gt;-1 and Map[I][J]==1: temp+=1 if _ == abs(n): if len(Map)&gt;I&gt;-1 and len(Map)&gt;J&gt;-1 and Map[I][J]==1: temp+=1 if temp&gt;=P:return [True,temp] else: return [False,temp] T=int(input()) for test_case in range(1,T+1): print(\"#\",end=\"\") print(test_case, end=\" \") N,M=map(int,input().split()) Map=[[]for i in range(N)]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-2117/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_2382",
        "excerpt":"def moving(cell): if cell[3] ==1: return [cell[0]-1,cell[1],cell[2],cell[3]] elif cell[3] ==2: return [cell[0]+1,cell[1],cell[2],cell[3]] elif cell[3] ==3: return [cell[0],cell[1]-1,cell[2],cell[3]] elif cell[3] ==4: return [cell[0],cell[1]+1,cell[2],cell[3]] T=int(input()) for test_case in range(1,T+1): print(\"#\",end=\"\") print(test_case,end=\" \") N,M,K=map(int,input().split()) Map=[[ [0,0] for i in range(N)] for j in range(N)] temp=[] for _ in range(K): temp.append(list(map(int,input().split()))) for __ in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-2382/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_4012",
        "excerpt":"def Tasty(answer,Map): temp,F1=[],0 for i in range(len(answer)): for j in range(len(answer)): if i==j: continue else: temp.append([answer[i],answer[j]]) for _ in temp: F1+=Map[_[0]][_[1]] temp,F2=[],0 Answer=[i for i in range(len(Map))] for i in range(len(Answer)-1,-1,-1): if Answer[i] in answer: Answer.pop(i) for i in range(len(Answer)): for j in range(len(Answer)): if i==j: continue else: temp.append([Answer[i],Answer[j]]) for...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-4012/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_4014",
        "excerpt":"def simulating(MAP_, X, start, Flag): answer = 0 count, Flag1 = 1, True for i in range(len(MAP)-1): if MAP[i][start] &gt; MAP[i+1][start]: count = 1 elif MAP[i][start] == MAP[i+1][start]: count+=1 elif MAP[i][start] &lt; MAP[i+1][start]: if count&gt;=X and abs(MAP[i+1][start]-MAP[i][start])==1: for _ in range(count): Flag[i-_][start]=1 count = 1 else: Flag1 = False count...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-4014/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_4014re",
        "excerpt":"T=int(input()) for test_case in range(1,T+1): answer=0 print(\"#\",end=\"\") print(test_case,end=\" \") N,X=map(int,input().split()) Map=[list(map(int,(input().split()))) for i in range(N)] flag=[[0 for i in range(N)] for i in range(N)] for i in range(N): temp,length=100,0 Flag=True for j in range(N): if temp==Map[i][j]: length+=1 elif Map[i][j]==temp+1 and X&lt;=length: for _ in range(1,X+1): flag[i][j-_]=1 temp,length= Map[i][j],1 elif Map[i][j]&gt;temp:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-4014_/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_",
        "excerpt":"from copy import deepcopy def charging(locA,locB,BC): tempA, tempB = [-1], [-1] for i in range(len(BC)): x,y,dis,_ = BC[i] if dis&gt;=abs(x-locA[0]) + abs(y-locA[1]): tempA.append(i) if dis&gt;=abs(x-locB[0]) + abs(y-locB[1]): tempB.append(i) MAX = -1 for i in tempA: for j in tempB: if i==-1 and j==-1: temp = 0 elif i==-1: temp =...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-5648/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5653",
        "excerpt":"dx = [-1, 1, 0, 0] dy = [0, 0, -1, 1] T = int(input()) for tc in range(1, T + 1): N, M, K = map(int, input().split()) data = [list(map(int, input().split())) for _ in range(N)] di = {} for i in range(N): for j in range(M): if data[i][j]: di[(i,...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-5653/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5653re",
        "excerpt":"dx = [-1, 1, 0, 0] dy = [0, 0, -1, 1] T = int(input()) for tc in range(1, T + 1): N, M, K = map(int, input().split()) data = [list(map(int, input().split())) for _ in range(N)] di = {} for i in range(N): for j in range(M): if data[i][j]: di[(i,...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-5653_/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5656",
        "excerpt":"from itertools import product from copy import deepcopy def simulating(MAP, cmd): for key in cmd: for i in range(len(MAP)): if MAP[i][key]!=0: bomb(MAP, (i,key)) gravity(MAP) break if sum(MAP,[]).count(0)==len(MAP)*len(MAP[0]): break return len(MAP)*len(MAP[0])-sum(MAP,[]).count(0) def bomb(MAP, where): x,y = where dir = [(0,1),(0,-1),(1,0),(-1,0)] value = MAP[x][y] for x_, y_ in dir: i ,j =...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-5656/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5658",
        "excerpt":"def counting(treasure, K): L = len(treasure)//4 temp = set() for i in range(L): treasure = treasure[1:]+treasure[0] for j in range(0,len(treasure),L): temp.add(\"0x\"+treasure[j:j+L]) temp = sorted(temp,reverse = True) return temp[K-1] T = int(input()) for test_case in range(1, T + 1): N, K = map(int, input().split() ) treasure = input() print(\"#{} {}\".format(test_case,int(counting(treasure, K),16)))...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_-5658/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_2383",
        "excerpt":"''' T = int(input()) for _ in range(T): N = int(input()) arr = [list(map(int, input().split())) for i in range(N)] queue = [] e = [] for i in range(N): for j in range(N): if arr[i][j] == 1: queue.append([i, j]) if arr[i][j] &gt; 1: e.append([i, j, arr[i][j]]) D = [] for...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_2383/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5431",
        "excerpt":" T = int(input()) # 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다. for test_case in range(1, T + 1):     length, num=map(int, input().split())     List=[i for i in range(length+1)]     List[0]=test_case     List2=list(map(int, input().split()))     for i in range(num): List.pop(List.index(List2.pop(0)))     print(\"#\",end=\"\")     for i in range(length-num+1): print(List[i],end=\" \")     print()     글 제목: SW_5431 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_5431/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5644",
        "excerpt":"def moving(now,dir): if dir==0: return now elif dir==1: return now[0]-1,now[1] elif dir==2: return now[0],now[1]+1 elif dir==3: return now[0]+1,now[1] else: return now[0],now[1]-1 def MAX(Adir,Bdir,BC): Amax,Bmax,maybe=[],[],[] i,j=0,0 for bc in BC: Adis=abs(Adir[0]-bc[0])+abs(Adir[1]-bc[1]) Bdis=abs(Bdir[0]-bc[0])+abs(Bdir[1]-bc[1]) if bc[2]&gt;=Adis and bc[2]&gt;=Bdis: maybe.append(bc[3]) elif bc[2]&gt;=Adis: Amax.append(bc[3]) elif bc[2]&gt;=Bdis: Bmax.append(bc[3]) if len(Amax)&gt;0:i=max(Amax) if len(Bmax)&gt;0:j=max(Bmax) Max=i+j for _ in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_5644/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5648",
        "excerpt":"Flag,Crash=0,0 def simulation(atoms,Map,locate): global Flag global Crash for _ in range(len(atoms)): atom=atoms[_] if atom[0]==-1: continue if atom[0]==0: locate[_][0]+=1 elif atom[0]==1: locate[_][0]-=1 elif atom[0]==2: locate[_][1]-=1 else: locate[_][1]+=1 Locate=[] while True: for i in range(len(atoms)): if 2001&gt;locate[_][0]&gt;-1 and 2001&gt;locate[_][1]&gt;-1: temp=locate.pop(0) if temp in Locate+locate: locate. Locate.append(locate.pop(0)) else: atoms.pop(i) locate.pop(i) break T =...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_5648/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5650",
        "excerpt":"dx = (0, 0, -1, 1) dy = (-1, 1, 0, 0) blocks = {1: (1, 3, 0, 2), 2: (3, 0, 1, 2), 3: (2, 0, 3, 1), 4: (1, 2, 3, 0), 5: (1, 0, 3, 2)} def play(board, y, x, dir): cur_y, cur_x = y, x score...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_5650/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5653",
        "excerpt":"def checking(index,cell,locate,i): [I,J]=index if [I,J] not in locate: locate.append([I,J]) cell.append([cell[i][0],0]) else: Index=locate.index([I,J]) if cell[Index][1]==0 and cell[i][0]&gt;cell[Index][0]: cell[Index][0]=cell[i][0] T = int(input()) for test_case in range(1, T + 1): print(\"#\",end=\"\") print(test_case, end=\" \") N,M,K=map(int,input().split()) Map=[[] for i in range(N)] for i in range(N):Map[i].extend(list(map(int,input().split()))) locate=[] cell=[] for i in range(N): for j in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_5653/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5656",
        "excerpt":"from itertools import permutations import copy Min=0 def check(Map): count=0 for i in range(len(Map)): for j in range(len(Map[0])): if Map[i][j]!=0: count+=1 return count def replacing(Map): for j in range(len(Map[0])): for i in range(len(Map)): if Map[i][j]==0: for _ in range(i,0,-1): Map[_][j]=Map[_-1][j] Map[0][j]=0 return Map def breaking(j,Map): temp=[] for i in range(len(Map)):...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_5656/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5658",
        "excerpt":"def Octat(Num): oct,answer=1,0 for i in range(len(Num)-1,-1,-1): if Num[i]==\"A\": temp=10 elif Num[i]==\"B\": temp=11 elif Num[i]==\"C\": temp=12 elif Num[i]==\"D\": temp=13 elif Num[i]==\"E\": temp=14 elif Num[i]==\"F\": temp=15 else: temp=Num[i] answer+=int(temp)*oct oct*=16 return answer def Shifting(num1,num2,num3,num4): Num1=num4[-1]+num1[:-1] Num2=num1[-1]+num2[:-1] Num3=num2[-1]+num3[:-1] Num4=num3[-1]+num4[:-1] return Num1,Num2,Num3,Num4 T = int(input()) for test_case in range(1, T + 1): N,K=map(int,input().split())...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_5658/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SW_5789",
        "excerpt":"T = int(input()) # 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다. for test_case in range(1, T + 1): print(\"#\",end=\"\") print(test_case,end=\" \") length, num=map(int,input().split()) List=[0 for _ in range(length)] for i in range(1,num+1): start, end= map(int,input().split()) for _ in range(start-1,end): List[_]=i for i in range(length): print(List[i],end=\" \") 글 제목: SW_5789 수정 시간:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/SW_5789/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_11047",
        "excerpt":"N, K = map(int, input().split()) Coin = [] for i in range(N): Coin.append(int(input())) Answer = 0 for i in range(N-1,-1,-1): if Coin[i]&gt;K: continue else: Answer += K // Coin[i] K -= Coin[i] * (K // Coin[i]) if not K: break #print(K, Coin[i]) print(Answer) 글 제목: BOJ_11047 수정 시간: 2018-06-03 13:24:00...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-11047/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_9095",
        "excerpt":" Num = 12 Sheet = [0 for _ in range(Num)]   def AnswerSheet():     Sheet[1], Sheet[2], Sheet[3] = 1, 2, 4          for i in range(4, Num):         Sheet[i] = Sheet[i-1] + Sheet[i-2] + Sheet[i-3]  AnswerSheet() Test_case = int(input()) for _ in range(Test_case): print(Sheet[int(input())])         글 제목: BOJ_9095 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-9095/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_11020",
        "excerpt":" def compare(A,B,count):     answer = 0      for i in range(len(A)):         if A[i] != B[i+count]: answer+=1      return answer   A,B = input().split()  Answer = 101 for i in range(len(B)-len(A)+1):     temp = compare(A,B,i)     if Answer&gt;temp: Answer=temp  print(Answer)     글 제목: BOJ_11020 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-11020/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_11399",
        "excerpt":"  Len = int(input())  List = list(map(int, input().split())) List.sort()  Answer, temp = 0, 0 for i in range(Len):     temp+=List[i]     Answer+=temp print(Answer)          글 제목: BOJ_11399 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-11399/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_11659",
        "excerpt":"  N, M = map(int, input().split())  Num = list(map(int, input().split())) Sum = [0 for _ in range(N)]  Sum[0] = Num[0] for i in range(N):     Sum[i] = Sum[i-1] + Num[i]  Sum.insert(0,0) for _ in range(M):     start, end = map(int, input().split())     print(Sum[end]-Sum[start-1])     글 제목: BOJ_11659 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-11659/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_11660",
        "excerpt":" N, M = map(int, input().split())  array = [list(map(int, input().split())) for _ in range (N) ]   for _ in range(M):     x1, y1, x2, y2 = map(int, input().split())          글 제목: BOJ_11660 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-11660/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_12101",
        "excerpt":"from copy import deepcopy Num = 12 Sheet = [[] for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = [[1]], [[1,1],[2]], [[1,1,1],[1,2],[2,1],[3]] for i in range(4, Num): for _ in range(len(Sheet[i-1])): temp = deepcopy(Sheet[i-1][_]) temp.insert(0,1) Sheet[i].append(temp) for _ in range(len(Sheet[i-2])): temp = deepcopy(Sheet[i-2][_]) temp.insert(0,2) Sheet[i].append(temp) for _ in range(len(Sheet[i-3])):...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-12101/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_13460",
        "excerpt":"from copy import deepcopy MIN = 11 Destination = [] def movingL(MAP, BALL): global Destination i,j=BALL L = len(MAP[0]) for _ in range(j,0,-1): if MAP[i][_-1] == \".\": MAP[i][_],MAP[i][_-1] = MAP[i][_-1],MAP[i][_] elif MAP[i][_-1] == \"O\": BALL = [i,_-1] break else: BALL = [i,_] break return MAP, BALL def movingR(MAP, BALL): global...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-13460/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_14418",
        "excerpt":"''' Square = [] square1, square2, square3 = list(map(int, input().split())) ,list(map(int, input().split())) ,list(map(int, input().split())) Square = square1 + square2 + square3 max, Temp, Flag = 0, 0, False for i in range(len(Square)): if Square[i]&gt;Temp: max = i Temp = Square[i] L = Square[max] count = 0 for i in [2,4,6]:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-14418/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_14476",
        "excerpt":"def GCD(a, b): while b&gt;0: a, b = b, a%b return a N = int(input()) Num = list(map(int, input().split())) Num.insert(-1, Num[-1]) Num.insert(0, Num[0]) LtoR = [0 for _ in range(N+2)] RtoL = [0 for _ in range(N+2)] LtoR[0] = Num[0] RtoL[N+1] = Num[N+1] for i in range(1,N+1): j = N...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-14476/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ-1946",
        "excerpt":" Test_case = int(input())  for _ in range(Test_case):     Person = []     Answer = 0     N = int(input())      for _ in range(N):Person.append(list(map(int,input().split())))          Person.sort(key=lambda x:x[0])          speech = 1000000     for i in range(N):         if speech&gt;Person[i][1]:              speech = Person[i][1]             Answer +=1     print(Answer)              글 제목: BOJ-1946 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-1946/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_2217",
        "excerpt":"  N = int(input())  Rope = [0 for _ in range(N)] for i in range(N): Rope[i] = int(input())  Rope.sort(reverse = True)  Answer = [0 for _ in range(N)] for i in range(N): Answer[i] = (i+1) * Rope[i]  print(max(Answer))     글 제목: BOJ_2217 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-2217/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_2247",
        "excerpt":" Memory = [0,1]  N = int(input())  if N&gt;1:     for _ in range(N-1): Memory.append(Memory[-1]+Memory[-2])  print(Memory[-1])     글 제목: BOJ_2247 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-2247/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_2484",
        "excerpt":"answer = 0 N = int(input()) for i in range(N): Dice = [0] temp = list(map(int, input().split())) for i in range(1,7): Dice.append(temp.count(i)) Max = max(Dice) if Max == 4: award = 50000 + Dice.index(Max) * 5000 elif Max == 3: award = 10000 + Dice.index(Max) * 1000 else: count, Max,...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-2484/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_2875",
        "excerpt":" N, M, K = map(int, input().split()) print(min(min(N//2,M),(N+M-K)//3))     글 제목: BOJ_2875 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-2875/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_2916",
        "excerpt":"N, K = map(int,input().split()) Known = [int(x) for x in input().split()] angles = [[0]*361 for i in range(N+1)] def Angles(count, angle): if angles[count][angle] == 1: return if count == N: return angles[count][angle] = 1 Angles(count, (360+angle+Known[count])%360) Angles(count, (360+angle-Known[count])%360) Angles(count+1, angle) Angles(0,0) temp = [int(x) for x in input().split()] for i...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-2916/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_5373",
        "excerpt":"import sys import copy input = sys.stdin.readline sys.setrecursionlimit(10000) Cube={\"U\":[[\"w\",\"w\",\"w\"],[\"w\",\"w\",\"w\"],[\"w\",\"w\",\"w\"]], \"D\":[[\"y\",\"y\",\"y\"],[\"y\",\"y\",\"y\"],[\"y\",\"y\",\"y\"]], \"F\":[[\"r\",\"r\",\"r\"],[\"r\",\"r\",\"r\"],[\"r\",\"r\",\"r\"]], \"B\":[[\"o\",\"o\",\"o\"],[\"o\",\"o\",\"o\"],[\"o\",\"o\",\"o\"]], \"L\":[[\"g\",\"g\",\"g\"],[\"g\",\"g\",\"g\"],[\"g\",\"g\",\"g\"]], \"R\":[[\"b\",\"b\",\"b\"],[\"b\",\"b\",\"b\"],[\"b\",\"b\",\"b\"]]} U=[[Cube[\"F\"][0][0],Cube[\"F\"][0][1],Cube[\"F\"][0][2]], [Cube[\"R\"][0][0],Cube[\"R\"][0][1],Cube[\"R\"][0][2]], [Cube[\"B\"][0][0],Cube[\"B\"][0][1],Cube[\"B\"][0][2]], [Cube[\"L\"][0][0],Cube[\"L\"][0][1],Cube[\"L\"][0][2]]] D=[[Cube[\"F\"][2][0],Cube[\"F\"][2][1],Cube[\"F\"][2][2]], [Cube[\"R\"][2][0],Cube[\"R\"][2][1],Cube[\"R\"][2][2]], [Cube[\"B\"][2][0],Cube[\"B\"][2][1],Cube[\"B\"][2][2]], [Cube[\"L\"][2][0],Cube[\"L\"][2][1],Cube[\"L\"][2][2]]] F=[[Cube[\"U\"][2][0],Cube[\"U\"][2][1],Cube[\"U\"][2][2]], [Cube[\"R\"][0][0],Cube[\"R\"][0][1],Cube[\"R\"][0][2]], [Cube[\"D\"][2][0],Cube[\"D\"][2][1],Cube[\"D\"][2][2]], [Cube[\"L\"][0][2],Cube[\"L\"][1][2],Cube[\"L\"][2][2]]] B=[[Cube[\"U\"][0][0],Cube[\"U\"][0][1],Cube[\"U\"][0][2]], [Cube[\"R\"][0][2],Cube[\"R\"][0][1],Cube[\"R\"][0][2]], [Cube[\"D\"][2][0],Cube[\"D\"][2][1],Cube[\"D\"][2][2]], [Cube[\"L\"][0][2],Cube[\"L\"][1][2],Cube[\"L\"][2][2]]] def rotate(cube,cmd): if cmd[1]==\"+\": else: T=int(input()) for _ in range(T): cube=copy.deepcopy(Cube) N=int(input()) cmds=list(input().split()) for cmd in cmds: rotate(cube,cmd) 글 제목:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-5373/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_5585",
        "excerpt":"Coin = [500, 100, 50, 10, 5, 1] Price = int(input()) change = 1000 - Price answer = 0 for i in range(len(Coin)): if change &lt; Coin[i]: continue else: answer += change // Coin[i] change -= Coin[i] * (change // Coin[i]) if change == 0: break print(answer) 글 제목: BOJ_5585...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-5585/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_1030",
        "excerpt":"#include &lt;iostream&gt; #include &lt;algorithm&gt; #include &lt;math.h&gt; using namespace std; char map[50][50]; int s, N, K, R1, R2, C1, C2; int isBlackSection(int i) { return !((i &lt; (N - K) / 2) || ((N - 1 - i) &lt; (N - K) / 2)); } int isContainsRange(int r1, int r2, int...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","C++"],
        "url": "http://localhost:4000/problemsolve/boj_1030/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_1036",
        "excerpt":"def AtoI(c): if ord('0') &lt;= ord(c) &lt;= ord('9'): return ord(c)-ord('0') return ord(c)-ord('A')+10 def to36(n): if n == 0: return \"0\" String = \"\" d = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_1036/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_1049",
        "excerpt":" N,M = map(int, input().split()) Answer=[]  Package, Solo = 10000, 10000 for _ in range(M):     i1, i2 = map(int, input().split())     if Solo&gt;i2: Solo=i2     if Package&gt;i1 and i2&gt;i1/6: Package=i1       print(min((N//6+1)*Package, (N//6)*Package + (N%6)*Solo, N*Solo))    글 제목: BOJ_1049 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_1049/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_1730",
        "excerpt":"N = int(input()) commands = input() Map = [[\".\"]*N for _ in range(N)] i, j = 0, 0 for cmd in commands: if cmd ==\"U\" and i!=0: if Map[i][j] == \".\": Map[i][j] =\"|\" elif Map[i][j] == \"-\": Map[i][j] =\"+\" if Map[i-1][j] == \".\": Map[i+-1][j] =\"|\" elif Map[i-1][j] == \"-\": Map[i-1][j]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_1730/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_1931",
        "excerpt":"  N = int(input())  Conference = [[] for i in range(N)] for i in range(N): Conference[i] = list(map(int, input().split()))  Conference.sort(key = lambda x:(x[1],x[0]))  Answer = 1 Last=Conference[0][1]  for i in range(1,N):     if Last&lt;=Conference[i][0]:         Last = Conference[i][1]         Answer+=1 print(Answer)    글 제목: BOJ_1931 수정 시간: 2018-06-03 13:24:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_1931/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_30",
        "excerpt":"Num = input() Flag = False Answer = 0 for i in range(len(Num)): #print(Num[i],Answer) if Num[i] == \"0\": Flag = True Answer += int(Num[i]) if Flag and Answer%3 ==0: Answer = list(Num) Answer.sort(reverse = True) for i in range(len(Answer)): print(Answer[i], end=\"\") print() else: print(-1) 글 제목: BOJ_30 수정 시간: 2018-06-03...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_30/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_TSP",
        "excerpt":"Travel Sales person 문제를 Brutal Force로 풀이했습니다. #!/usr/bin/env python # coding: utf-8 # TSP Brutal Force by Recursive # In[81]: INT_MAX = 2147483647 visited=[0 for i in range (11)] Min=INT_MAX # In[82]: def min(x,y): if x&gt;y: return y else: return x # In[83]: def tsp(Next, total, Recur): global Min global...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/BF_TSP/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_allergy",
        "excerpt":"식단.xlsx 식단 엑셀파일을 입력 받은 뒤, 날짜와 알러지 번호를 입력하면 그 것을 제외한 식단을 안내해주는 프로그램입니다. Brutal Force를 활용했습니다. #엑셀 읽어오기 try: import openpyxl except ModuleNotFoundError as E: print(\"해당 컴퓨터에 openpyxl 라이브러리가 있어야 동작합니다!\") allergy=[] Menu=openpyxl.load_workbook('데이터_셋완성.xlsx') menu2=Menu.active for menu1 in menu2.rows: row_index=menu1[0].row i=0 temp=[] for menu0 in menu1: if menu1[i].value...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/BF_allergy/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_JobAssigning",
        "excerpt":"i만큼 시간이 걸리는 작업을 j 시간에 받습니다. 이런 작업이 N개 있을 때, brutal force로 최단 시간을 탐색하는 코드입니다. def find_lower_bound(mat,job,row,n): k=0 for i in range(row+1,n): min = 10000000 for j in range(0,n): if job[j]==0 and mat[i][j] &lt; min: min=mat[i][j] k+=min return k def job_assinging(mat,mat2,job,row,choice,sol,n): for i in range(0,n): if job[i]==0:...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/BF_job/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_NQueen",
        "excerpt":"Queen 숫자를 입력받으면 조건에 맞는 각각의 위치를 반환하는 프로그램입니다. #!/usr/bin/env python # coding: utf-8 # In[1]: def nqueen(sol, N): global count if len(sol) == N: count += 1 print(count, sol) return 0 candidate = list(range(N)) for i in range(len(sol)): if sol[i] in candidate: candidate.remove(sol[i]) distance = len(sol) - i if...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/BT_NQueen/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_MapColoring",
        "excerpt":"그래프의 노드 수와 엣지를 입력받으면 색칠하는데 필요한 최소의 색을 리턴하는 프로그램입니다. #!/usr/bin/env python # coding: utf-8 # In[7]: class Graph(): def __init__(self, vertices): self.V = vertices self.graph = [[0 for column in range(vertices)] for row in range(vertices)] def isSafe(self, v, colour, c): for i in range(self.V): if self.graph[v][i] == 1...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/BT_coloring/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_BCD",
        "excerpt":"이진법을 divide and conquer 방식으로 십진법으로 변환합니다. def BCD(Num): a=int(Num); tmp=[0,0,0,0] if a-8&gt;=0: tmp[0]=1 a-=8 if a-4&gt;=0: tmp[1]=1 a-=4 if a-2&gt;=0: tmp[2]=1 a-=2 if a-1&gt;=0: tmp[3]=1 a-=1 for i in range(4): print(\"%d\" %(tmp[i]), end='') print(\" \", end='') Num=input(\"BCD로 출력할 십진법 수를 입력하시오\") for i in Num: if \"0\"&lt;=i&lt;=\"9\": BCD(i) else:...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/DC_BCD/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_BFS",
        "excerpt":"divide and conquer 방식으로 DFS를 구현했습니다. #!/usr/bin/env python # coding: utf-8 # 전역 변수 # In[1]: Graph=[[0 for j in range(100)] for i in range(100)] Graph_value=[0 for i in range(100)] BFSvisit=[0 for i in range(100)] queue=[0 for i in range(100)] # Queue print 함수 # In[2]: def print_Queue(front, rear): global...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/DC_BFS/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_Closest Pair",
        "excerpt":"Colsest Pair 알고리즘을 Divide and Conquer와 Brutal로 코딩해 둘 간의 시간 복잡도를 비교한 프로그램입니다. #!/usr/bin/env python # coding: utf-8 # Sorting X,Y # In[50]: def solution(x, y): a = list(zip(x, y)) ax = sorted(a, key=lambda x: x[0]) ay = sorted(a, key=lambda x: x[1]) p1, p2, mi = closest_pair(ax, ay) return...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/DC_closest/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_Knapsack",
        "excerpt":"Dynamic Programming으로 Kanpsack 문제를 풀었습니다. #!/usr/bin/env python # coding: utf-8 # In[3]: def knapSack(W , wt , val , n): if n == 0 or W == 0 : return 0 if (wt[n-1] &gt; W): return knapSack(W , wt , val , n-1) else: return max(val[n-1] + knapSack(W-wt[n-1] , wt...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/DP_knapsack/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_Huffman",
        "excerpt":"Greedy 방식으로 허프만 압축 알고리즘을 구현했습니다. 2가지 방법으로 구현하였습니다. #!/usr/bin/env python # coding: utf-8 # In[1]: import heapq # In[2]: class HeapNode: def __init__(self, char, freq): self.char = char self.freq = freq self.left = None self.right = None def __lt__(self, other): return self.freq &lt; other.freq def __eq__(self, other): if(other ==...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/GR_Huffman/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_Task_Scheduling",
        "excerpt":"N개의 작업을 할당받은 시간과 소요되는 시간을 입력받으면, 최소 시간을 출력합니다. #!/usr/bin/env python # coding: utf-8 # Task Scheduling # In[46]: def interval_scheduling(stimes, ftimes, count): if len(stimes)==0: print('A maximum-size subset of activities that are mutually compatible is',count) return index = list(range(len(stimes))) index.sort(key=lambda i: ftimes[i]) maximal_set = set() prev_finish_time = 0 for...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/GR_schedule/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Algorithm_RBTree",
        "excerpt":"Transform and Conquer 중 하나인 RB Tree를 구현했습니다. #!/usr/bin/env python # coding: utf-8 # In[3]: class TreeNode: def __init__(self,val,left = None,right = None, parent = None,color = None): self.val = val self.leftChild = left self.rightChild = right self.parent = parent self.color = color def hasLeftChild(self): return self.leftChild def hasRightChild(self): return...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Algorithm","python"],
        "url": "http://localhost:4000/classiccs/TC_RBTree/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "대학 프로젝트 인력시장 - Intro",
        "excerpt":"URL video 프로젝트 기획 계기 및 의도 통신, 자동화, 데이터가 IT에서 가장 중요하다 생각하는데, 셋을 한번에 경험한 적이 없다 2학기 중 여러 발표 준비를 하면서, 발표가 끝난 뒤 해당 자료가 폐기되는 것이 허무했다 개발을 좋아하는 대학생끼리 발표 자료를 통해 서로를 검증하고, 프로젝트 멤버로 초청하는 것은 어떨까? 프로젝트 중 배운 것...","categories": ["ProjectDesign"],
        "tags": ["ProjectDesign"],
        "url": "http://localhost:4000/projectdesign/Project-member-collect_intro/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "노약자를 위한 키오스크 - Intro",
        "excerpt":"code video_voiceX video_voiceO 프로젝트 기획 계기 및 의도 “기술의 빠른 발전과 도입이 소외계층을 소외시킨다”를 부정하고 싶어 시작함 유튜브에서 박막례 할머니가 패스트푸드 점으로 갔으나, 키오스크 때문에 포기한 것을 봄 인턴 때 공부한 Voice UX가 도움이 된다 생각함 프로젝트 중 배운 것 UX가 소외계층의 소외를 막을 정도로 IT는 현실과 밀접하다 조금 오바하자면,...","categories": ["ProjectDesign"],
        "tags": ["ProjectDesign"],
        "url": "http://localhost:4000/projectdesign/KioskProjector_intro/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "AI 레시피 프린터 - Intro",
        "excerpt":"Code Video 프로젝트 기획 계기 및 의도 사업성을 교수님에게 인정받자 실제 프로젝트에 AI 기술을 활용해보자 Google Cloud Platform와 같은 클라우드 플랫폼을 활용하자 플랫폼 중 정식출시되지 않은 기능을 활용하고 기여하자 프로젝트 중 배운 것 첨단 기술이 오히려 경량화 된 서비스에 적합한 경우도 많다 서버 측에서 로그데이터의 중요함과 가치 최소한의 성능이 나오지...","categories": ["ProjectDesign"],
        "tags": ["ProjectDesign"],
        "url": "http://localhost:4000/projectdesign/AIRecipePrinter_intro/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15684",
        "excerpt":"import copy import itertools N, M, H = map(int, input().split()) def cmd_maker(_): column, row = [i for i in range(N - 1)], [i for i in range(H)] columns = itertools.permutations(column*_, _) rows = itertools.permutations(row*_, _) cmds=[] for a in columns: for b in rows: cmds.append([a, b]) return cmds def simulation(MMap,...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15684/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15685",
        "excerpt":"import copy N=int(input()) Curve=[ list(map(int,input().split())) for i in range(N) ] DragonCurve0={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[]} DragonCurve1={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[]} DragonCurve2={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[]} DragonCurve3={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[]} DragonCurve=[DragonCurve0,DragonCurve1,DragonCurve2,DragonCurve3] for i in range(11): if i==0: temp0=[[0,0],[1,0]] temp1=[[0,0],[0,-1]] temp2=[[0,0],[-1,0]] temp3=[[0,0],[0,1]] else: End=len(temp0)-1 for j in range(len(temp0)-2,-1,-1): Temp0=[temp0[End][0]+(temp0[End][1]-temp0[j][1]),temp0[End][1]-(temp0[End][0]-temp0[j][0])] temp0.append(Temp0) Temp1=[temp1[End][0]+(temp1[End][1]-temp1[j][1]),temp1[End][1]-(temp1[End][0]-temp1[j][0])] temp1.append(Temp1) Temp2=[temp2[End][0]+(temp2[End][1]-temp2[j][1]),temp2[End][1]-(temp2[End][0]-temp2[j][0])] temp2.append(Temp2) Temp3=[temp3[End][0]+(temp3[End][1]-temp3[j][1]),temp3[End][1]-(temp3[End][0]-temp3[j][0])] temp3.append(Temp3) DragonCurve0[i].extend(temp0) DragonCurve1[i].extend(temp1) DragonCurve2[i].extend(temp2) DragonCurve3[i].extend(temp3) Answer=[] for _ in range(N): Temp=copy.deepcopy(DragonCurve[Curve[_][2]][Curve[_][3]]) for...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15685/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_14418",
        "excerpt":"first, second, third = list(map(int,input().split())), list(map(int,input().split())), list(map(int,input().split())) first.sort(reverse=True) second.sort(reverse=True) third.sort(reverse=True) sortedArr = [first, second, third] sortedArr.sort(reverse=True) a,b,c,d,e,f = sortedArr[0][0], sortedArr[0][1], sortedArr[1][0], sortedArr[1][1], sortedArr[2][0], sortedArr[2][1] flag = False if a-b==c: if a-b==f: if a==d+e: flag = True if a-b==e: if a==d+f: flag = True elif a-b==d: if a-b==f: if a==c+e: flag...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-14418/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_14565",
        "excerpt":" N, A = map(int,input().split()) print(N-A,end=\" \") r1, r2, t1, t2 = N, A, 0, 1 while r2&gt;0:     #print(r1,r2,t1,t2)     q = r1//r2     r0,t0 = r1-q*r2, t1-q*t2     r1,r2 = r2,r0     t1,t2 = t2,t0 if r1==1 and t1&gt;=0: print(t1) elif r1==1: print((N+t1)%N) else: print(-1)     글 제목: BOJ_14565 수정 시간: 2019-07-14 15:20:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-14565/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15683",
        "excerpt":"import copy Dir={1:[[0,1]], 2:[[0,1],[0,-1]], 3:[[-1,0],[0,1]], 4:[[-1,0],[1,0],[0,1]], 5:[[-1,0],[1,0],[0,-1],[0,1]] } N, M = map(int, input().split()) CCTV = [] Min=1000 def DFS(Map, CCTV, depth): global Min if depth ==-1: count=0 for i in range(N): for j in range(M): if Map[i][j]==0: count+=1 if count &lt; Min: Min=count #for i in range(N): print(Map[i]) return cmds=Dir[CCTV[depth][2]]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15683/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15686",
        "excerpt":"import sys from itertools import combinations input = sys.stdin.readline sys.setrecursionlimit(10000) def Calculation(chicken,house): dist=1000 for _ in range(len(chicken)): i,j=chicken[_] I,J=house temp=abs(i-I)+abs(j-J) if dist&gt;temp: dist=temp return dist N,M=map(int,input().split()) Map=[list(map(int,input().split())) for i in range(N)] Chicken=[] House=[] for i in range(N): for j in range(N): if Map[i][j] == 1: House.append([i,j]) elif Map[i][j] == 2:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15686/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15897",
        "excerpt":"  N = int(input()) sum, step = 0, 0 i=1 while N&gt;=i:     divide, rem = (N-1)//i, (N-1)%i     if divide == 0: step = 1     else: step = rem//divide + 1     sum += (1+(N-1)//i) * step     i+=step  print(sum)      글 제목: BOJ_15897 수정 시간: 2019-07-14 15:20:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15897/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15988",
        "excerpt":"Test_case = int(input()) Answer = [] for _ in range(Test_case): Answer.append(int(input())) Num = max(Answer)+1 Sheet = [0 for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = 1, 2, 4 for i in range(4, Num): Sheet[i] = Sheet[i-1] + Sheet[i-2] + Sheet[i-3] Sheet[i] %= 1000000009 AnswerSheet() for _ in range(Test_case):...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15988/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15989",
        "excerpt":"Test_case = int(input()) Answer = [] for _ in range(Test_case): Answer.append(int(input())) Num = max(Answer)+1 Sheet = [[0,0,0] for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = [1,0,0], [1,1,0], [1,1,1] for i in range(4, Num): Sheet[i][0] = Sheet[i-1][0] Sheet[i][1] = Sheet[i-2][0] + Sheet[i-2][1] Sheet[i][2] = Sheet[i-3][0] + Sheet[i-3][1] + Sheet[i-3][2]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15989/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15990",
        "excerpt":"Test_case = int(input()) Answer = [] for _ in range(Test_case): Answer.append(int(input())) Num = max(Answer)+1 Sheet = [[0,0,0] for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = [1,0,0], [0,1,0], [1,1,1] for i in range(4, Num): Sheet[i][0] = (Sheet[i-1][1] + Sheet[i-1][2])%1000000009 Sheet[i][1] = (Sheet[i-2][0] + Sheet[i-2][2])%1000000009 Sheet[i][2] = (Sheet[i-3][0] + Sheet[i-3][1])%1000000009...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15990/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15991",
        "excerpt":"Test_case = int(input()) Answer = [] for _ in range(Test_case): Answer.append(int(input())) Num = max(Answer)+1 Sheet = [[0,0,0] for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = [1,0,0], [1,1,0], [1,0,1] Sheet[4], Sheet[5], Sheet[6] = [2,1,0], [2,1,0], [3,2,1] if 7&gt;Num: return for i in range(7, Num): Sheet[i][0] = (Sheet[i-2][0] + Sheet[i-2][1]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15991/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15992",
        "excerpt":"N = int(input()) Num1 = [] Num2 = [] for _ in range(N): a, b = map(int, input().split()) Num1.append(a) Num2.append(b) MAX = max(Num1)+1 Sheet = [[0]*_ for _ in range(MAX)] def AnswerSheet(): Sheet[1] = [1,0,0] Sheet[2] = [1,1,0] Sheet[3] = [1,2,1] for i in range(4, MAX): for j in range(1,4):...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15992/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15993",
        "excerpt":"Test_case = int(input()) Answer = [] for _ in range(Test_case): Answer.append(int(input())) Num = max(Answer)+1 Sheet = [[0,0] for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = [1,0], [1,1], [2,2] for i in range(4, Num): Sheet[i][0] = (Sheet[i-1][1] + Sheet[i-2][1] + Sheet[i-3][1])%1000000009 Sheet[i][1] = (Sheet[i-1][0] + Sheet[i-2][0] + Sheet[i-3][0])%1000000009 AnswerSheet()...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-15993/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_16234",
        "excerpt":"import sys input = sys.stdin.readline sys.setrecursionlimit(10000) N,L,R=map(int,input().split()) Map=[list(map(int, input().split())) for i in range(N)] Union=[] Dir=[[1,0],[-1,0],[0,1],[0,-1]] Visited=[[False]*N for _ in range(N)] def Check(i,j): Visited[i][j]=True Union.append([i,j]) for x,y in Dir: I,J=x+i,y+j if N&gt;I&gt;-1 and N&gt;J&gt;-1 and Visited[I][J]==False and R+1&gt;abs(Map[i][j]-Map[I][J])&gt;L-1: Check(I,J) answer=-1 Flag=True while Flag: answer+=1 if N==1: break Flag=False Visited=[[False]*N for _...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-16234/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_16235",
        "excerpt":"from sys import stdin from collections import deque input = stdin.readline ans = 0 dx, dy = (-1, -1, -1, 0, 0, 1, 1, 1), (-1, 0, 1, -1, 1, -1, 0, 1) N, M, K = map(int, input().split()) a = [list(map(int, input().split())) for _ in range(N)] tree = [[deque()...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-16235/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_16236",
        "excerpt":"def simulating(Bshark, MAP): L = len(MAP) dir = [(-1,0),(0,-1),(1,0),(0,1)] queue = [Bshark[0]] shark_now = Bshark[1] shark_growth = Bshark[2] answer, time = 0, 0 Flag = [ [0]*L for _ in range(L)] while queue != []: queue.sort(key = lambda x:(x[2],x[0],x[1])) #print(queue) #for _ in range(L): print(Flag[_]) #print() i,j,time = queue.pop(0) Flag[i][j]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-16236/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_16236",
        "excerpt":"from sys import stdin from heapq import heappush, heappop input = stdin.readline n = int(input()) a = [list(map(int, input().split())) for _ in range(n)] q = [] def bfs(): global q body, eat, ans = 2, 0, 0 check = [[False] * n for _ in range(n)] while q: d, x,...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-16236_re/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_16768",
        "excerpt":"Dir = [[1,0],[-1,0],[0,1],[0,-1]] N,K = map(int, input().split()) count = 0 Map, Memoization = [], [] for _ in range(N): Map.append(list(input())) Memoization = [[0 for i in range(10)] for j in range(N)] def DFS(i,j,color): global Map global Memoization global count for d1, d2 in Dir: i_, j_ = i+d1, j+d2 if...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-16768/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17072",
        "excerpt":"def AsciiArt(R,G,B): I = 2126*R + 7152*G + 722*B count = 510000 if count&gt;I: return \"#\" elif 2*count&gt;I: return \"o\" elif 3*count&gt;I: return \"+\" elif 4*count&gt;I: return \"-\" else: return \".\" N, M = map(int, input().split()) Map = [[0] * M for i in range(N)] value = [[] for i...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-17072/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17088",
        "excerpt":"from sys import maxsize, setrecursionlimit, stdin #input() = stdin.readline() setrecursionlimit(10**8) ''' N, Min = maxsize, maxsize sequence = [] def recur(count, cal, indent, pre): global N global Min global sequence if count == N: if Min&gt;cal: Min = cal return elif count == 0: for i in [0, -1, 1]:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-17088/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17198",
        "excerpt":"''' Map=[input() for _ in range(10)] Map.insert(0,'0000000000') Map.append('0000000000') for i in range(12): Map[i]= '0' + Map[i] Map[i]+='0' start, end, rock = [], [], [] answer = 100000 def printMap(Map): for i in range(1,11): print(Map[i][1:-1]) print() def Moving(i,j,length): printMap(Map) if Map[i][j] == '0' or [i,j] in rock: return if [i,j] ==...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-17198/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_1730",
        "excerpt":"N = int(input()) commands = input() Map = [[\".\"]*N for _ in range(N)] i, j = 0, 0 for cmd in commands: if cmd ==\"U\" and i!=0: if Map[i][j] == \".\": Map[i][j] =\"|\" elif Map[i][j] == \"-\": Map[i][j] =\"+\" if Map[i-1][j] == \".\": Map[i+-1][j] =\"|\" elif Map[i-1][j] == \"-\": Map[i-1][j]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-1730/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17413",
        "excerpt":"String = input() chunk = [] Flag = True temp = \"\" for char in String: if char == \"&lt;\": if temp !=\"\": chunk.append(temp) Flag = False temp = \"&lt;\" elif char == \"&gt;\": temp += char chunk.append(temp) Flag = True temp = \"\" elif Flag and char == \"...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-17413/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17425",
        "excerpt":"from math import sqrt T = int(input()) Max = 0 Nums = [] for _ in range(T): temp = int(input()) if temp&gt; Max: Max=temp Nums.append(temp) Map = [1 for _ in range(Max+1)] for i in range(2,Max+1): for _ in range(i,Max+1,i): Map[_]+=i for i in range(1, Max): Map[i+1]+=Map[i] for i in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-17425/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17427",
        "excerpt":"Max = int(input()) Nums = []  Map = [1 for _ in range(Max+1)] for i in range(2,Max+1):     for _ in range(i,Max+1,i):         Map[_]+=i  for i in range(1, Max): Map[i+1]+=Map[i] print(Map[Max])    글 제목: BOJ_17427 수정 시간: 2019-07-14 15:20:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_-17427/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17436",
        "excerpt":"#include&lt;iostream&gt; #include&lt;vector&gt; using namespace std; long long answer, m; int n, p[10]; void iter(int, int, int, vector&lt;int&gt;); int main(void){ cin &gt;&gt; n &gt;&gt; m; for(int i = 0; i &lt; n; i++) cin &gt;&gt; p[i]; for (int i = 1; i &lt;= n; i++){ for(int j = 1; j &lt;=...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","C++"],
        "url": "http://localhost:4000/problemsolve/boj_-17436/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15663",
        "excerpt":"''' from itertools import permutations _, m = map(int,input().split()) nums = list(map(int,input().split())) nums.sort() def unique(iterable): Temp=set() for x in iterable: if x in Temp: continue else: Temp.add(x) return Temp for seq in unique(permutations(nums, m)): print(' '.join(str(x) for x in seq)) ''' N, M= 0, 0 Final, Memoization, Data=[], [], []...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_15663/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_",
        "excerpt":"    글 제목: BOJ_ 수정 시간: 2019-07-14 15:20:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_159/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15989",
        "excerpt":"Test_case = int(input()) Answer = [] for _ in range(Test_case): Answer.append(int(input())) Num = max(Answer)+1 Sheet = [[0,0,0] for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = [1,0,0], [1,1,0], [1,1,1] for i in range(4, Num): Sheet[i][0] = Sheet[i-1][0] Sheet[i][1] = Sheet[i-2][0] + Sheet[i-2][1] Sheet[i][2] = Sheet[i-3][0] + Sheet[i-3][1] + Sheet[i-3][2]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_15989/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15990",
        "excerpt":"Test_case = int(input()) Answer = [] for _ in range(Test_case): Answer.append(int(input())) Num = max(Answer)+1 Sheet = [[0,0,0] for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = [1,0,0], [0,1,0], [1,1,1] for i in range(4, Num): Sheet[i][0] = (Sheet[i-1][1] + Sheet[i-1][2])%1000000009 Sheet[i][1] = (Sheet[i-2][0] + Sheet[i-2][2])%1000000009 Sheet[i][2] = (Sheet[i-3][0] + Sheet[i-3][1])%1000000009...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_15990/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_15993",
        "excerpt":"Test_case = int(input()) Answer = [] for _ in range(Test_case): Answer.append(int(input())) Num = max(Answer)+1 Sheet = [[0,0] for _ in range(Num)] def AnswerSheet(): Sheet[1], Sheet[2], Sheet[3] = [1,0], [1,1], [2,2] for i in range(4, Num): Sheet[i][0] = (Sheet[i-1][1] + Sheet[i-2][1] + Sheet[i-3][1])%1000000009 Sheet[i][1] = (Sheet[i-1][0] + Sheet[i-2][0] + Sheet[i-3][0])%1000000009 AnswerSheet()...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_15993/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_16236",
        "excerpt":"def simulating(Bshark, MAP): L = len(MAP) dir = [(-1,0),(0,-1),(1,0),(0,1)] queue = [Bshark[0]] shark_now = Bshark[1] shark_growth = Bshark[2] answer, time = 0, 0 Flag = [ [0]*L for _ in range(L)] while queue != []: queue.sort(key = lambda x:(x[2],x[0],x[1])) #print(queue) #for _ in range(L): print(Flag[_]) #print() i,j,time = queue.pop(0) Flag[i][j]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_16236/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_16768",
        "excerpt":"Dir = [[1,0],[-1,0],[0,1],[0,-1]] N,K = map(int, input().split()) count = 0 Map, Memoization = [], [] for _ in range(N): Map.append(list(input())) Memoization = [[0 for i in range(10)] for j in range(N)] def DFS(i,j,color): global Map global Memoization global count for d1, d2 in Dir: i_, j_ = i+d1, j+d2 if...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_16768/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17072",
        "excerpt":"def AsciiArt(R,G,B): I = 2126*R + 7152*G + 722*B count = 510000 if count&gt;I: return \"#\" elif 2*count&gt;I: return \"o\" elif 3*count&gt;I: return \"+\" elif 4*count&gt;I: return \"-\" else: return \".\" N, M = map(int, input().split()) Map = [[0] * M for i in range(N)] value = [[] for i...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_17072/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17088",
        "excerpt":"import copy n = int(input()) bs = list(map(int,input().split())) v = [-1, 0, 1] answer = 987654321 if n == 0 or n == 1: print(0) exit(0) for i in v: start = bs[0]+v[i] for j in v: end = bs[n-1]+v[j] step = (start-end)/(n-1) if not (step == int(step)): continue else:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_17088/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_17427",
        "excerpt":" Max = int(input()) Nums = []  Map = [1 for _ in range(Max+1)] for i in range(2,Max+1):     for _ in range(i,Max+1,i):         Map[_]+=i  for i in range(1, Max): Map[i+1]+=Map[i] print(Map[Max])     글 제목: BOJ_17427 수정 시간: 2019-07-14 15:20:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_17427/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BOJ_2484",
        "excerpt":"answer = 0 N = int(input()) for i in range(N): Dice = [0] temp = list(map(int, input().split())) for i in range(1,7): Dice.append(temp.count(i)) Max = max(Dice) if Max == 4: award = 50000 + Dice.index(Max) * 5000 elif Max == 3: award = 10000 + Dice.index(Max) * 1000 else: count, Max,...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/boj_2484/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_CyclicRotation",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[5]:   def solution(A,K):     while(K&gt;0):         I=A.pop()         A.insert(0,I)         K-=1         print(A)   # In[7]:   solution([1,2,3,4,5],3)   # In[10]:   solution([3, 8, 9, 7, 6], 3)      글 제목: codility_CyclicRotation 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-CyclicRotation/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_DFS",
        "excerpt":"  def DFS(x,y):     global visited     print(x,y)     if x+y ==5: return      for dx, dy in [(1,0),(-1,0),(0,-1),(0,1)]:         i, j = x+dx, y+dy         if i&gt;-1 and j&gt;-1 and visited[i][j]==0:             visited[i][j]=1             DFS(i,j)  visited= [ [0]*6 for i in range(6) ] DFS(0,0) for i in range(len(visited)): print(visited[i])     글 제목: codility_DFS 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-DFS/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_FrogJmp",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[9]:   def solution(X, Y, D):     result=(Y-X)//D     if((Y-X)%D==0):         return result     print(result)     return result+1   # In[11]:   solution(10,85,30)      글 제목: codility_FrogJmp 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-FrogJmp/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_FrogRiverOne",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[7]:   def solution(X, A):     River=[0 for _ in range(X)]     i=0     count=0          while(len(A)&gt;i):         if River[A[i]-1] != 1:             River[A[i]-1]=1             count+=1         if count == X:             return i         i+=1              return -1   # In[14]:   solution(5, [1,2,3,4,4] )      글 제목: codility_FrogRiverOne 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-FrogRiverOne/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_MaxCounters_O",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[ ]:   def solution(N, A):     i=0     Max=0     Result=[0 for _ in range(N)]     while(len(A)&gt;i):         if A[i] == N+1:             Result=[Max for _ in range(N)]         else:             Result[A[i]-1]+=1                      if A[i] != N+1 and Result[A[i]-1]&gt;Max:             Max=Result[A[i]-1]         i+=1              return Result      글 제목: codility_MaxCounters_O 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-MaxCounters_O/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_MinAvgTwoSlice-AverageChart",
        "excerpt":"#!/usr/bin/env python # coding: utf-8 # In[31]: def solution(A): LeftArr=[A[0] for _ in range(len(A))] RightArr=[A[len(A)-1] for _ in range(len(A))] LTop=A[0] L=0 i=0 while len(A)-1&gt;i: LeftArr[i+1] = (LeftArr[i]*(i+1) + A[i+1]) / (i+2) if LeftArr[i+1]&gt;LTop: LTop=LeftArr[i+1] L=i i+=1 print (LeftArr, LTop) print(L) RTop=A[len(A)-1] R=0 i=0 while len(A)-1&gt;i: RightArr[i+1] = (RightArr[i]*(i+1) + A[len(A)-i-2])...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-MinAvgTwoSlice-AverageChart/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_MinAvgTwoSlice-NNN",
        "excerpt":"#!/usr/bin/env python # coding: utf-8 # In[22]: def solution(A): Avg=[0 for _ in range((len(A)-1)*len(A)//2)] Top=[1000000,0] N=0 i=0 while len(A)-1&gt;i: j=0 while len(A)-i&gt;j: if j==0: Avg[N]=(A[i]+A[i+1])/2 j+=1 else: Avg[N]=(Avg[N-1]*j + A[j+i]) / (j+1) if Avg[N]&lt;Top[0]: Top[0]=Avg[N] Top[1]=i j+=1 N+=1 i+=1 return Top[1] # In[23]: solution([4,2,2,5,1,5,8]) 글 제목: codility_MinAvgTwoSlice-NNN 수정 시간: 2019-08-14...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-MinAvgTwoSlice-NNN/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_MissingInteger",
        "excerpt":"#!/usr/bin/env python # coding: utf-8 # In[53]: def solution(A): Miss=[0 for _ in range(len(A)*3)] i=0 while(len(A)&gt;i): if A[i]&gt;0 and len(Miss)&gt;A[i]: Miss[A[i]]=1 i+=1 print(Miss) i=1 while(len(Miss)&gt;=i): if Miss[i]!=1: return i i+=1 # In[43]: solution([1, 3, 6, 4, 1, 2]) # In[49]: solution([1, 2, 3]) # In[51]: solution([-1, -3]) # In[54]: solution([1])...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-MissingInteger/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_N&&M",
        "excerpt":"''' Answer=[] def combination(List, Flag, temp): global Answer j=len(List) if Flag==0: Answer.append(temp) return else: for i in range(j): if List[i]==0: List[i]=1 combination(List,Flag-1,temp+str(i+1)+\" \") List[i]=0 N,M = map(int,input().split()) List=[0 for _ in range(N)] combination(List,M,\"\") for _ in range(len(Answer)): print(Answer[_]) ''' ''' def combination(List, Flag, start): j=len(List) if Flag==0: for i in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-N&&M/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_PermCheck-totalsum",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[ ]:   def solution(A):     N=len(A)     Sum=N*(N+1)/2     lenSum=sum(A)     if(Sum==lenSum):         return 1     else:         return 0      글 제목: codility_PermCheck-totalsum 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-PermCheck-totalsum/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_Qsort",
        "excerpt":" def Qsort(List,start,end):     if len(List) &lt;1: return List      Left, Mid, Right = [], [], []     pivot=List[end]      for item in List:         if item &gt; pivot:             Right.append(item)         elif item == pivot:             Mid.append(item)         else:             Left.append(item)     return Qsort(Right,0,len(Right)-1)+Mid+Qsort(Left,0,len(Left)-1)  A=[1,3,6,3,5,4,5,7,9,0,7,6,4,2,2,3,5,5,2,12,23,123,423,55]  print(Qsort(A,0,len(A)-1))     글 제목: codility_Qsort 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-Qsort/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_TapeEquilibrium",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[25]:   def solution(A):     length=len(A)     Sum=sum(A,0)     print(length,Sum)     a=1     val=0     answer=10000     while(length&gt;a):         val+=A[a]         print(val)         result=abs(Sum-val*2)         if(answer&gt;result):             answer=result         a+=1         print(answer)     return answer   # In[26]:   solution([-1000,1000]) solution([5,6,2,4,1])      글 제목: codility_TapeEquilibrium 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-TapeEquilibrium/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_num2",
        "excerpt":"C, F, X = map(float, input().split()) time = 0 work_now = 2 while True: work_next = work_now + F case1_time = time + X/work_now case2_time = time + C/work_now + X/work_next if case1_time &gt; case2_time: time += C/work_now work_now = work_next else: time = case1_time break print(time) 글 제목: codility_num2...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_-num2/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_MaxCounter2x2",
        "excerpt":"#!/usr/bin/env python # coding: utf-8 # In[108]: def solution(N, A): col=0 last=0 Result=[[0 for _ in range(N+1)] for _ in range(len(A)+1)] i=0 while(len(A)&gt;i): if A[i] != N+1 and Result[col][A[i]-1]&gt;Result[col][N]: Result[col][A[i]-1]+=1 Result[col][N]=Result[col][A[i]-1] elif A[i] != N+1: Result[col][A[i]-1]+=1 else: col+=1 i+=1 i=0 while(col&gt;i): last+=Result[i][N] i+=1 print(last) i=0 while(N&gt;i): Result[col][i]+=last i+=1 print(Result) Final=Result[col][:N]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_MaxCounter2x2/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_MaxCounters-Answer",
        "excerpt":"#!/usr/bin/env python # coding: utf-8 # In[7]: def solution(N, A): Result=[0 for _ in range(N)] i=0 counter=0 while(len(A)&gt;i): if A[i]!=N+1 and Result[A[i-1 ]]&gt;counter: counter=Result[A[i-1]] Result[A[i]-1]+=1 elif A[i]!=N+1: Result[A[i]-1]+=1 else: Result=[counter for _ in range(N)] i+=1 print(Result) return Result # In[8]: solution(5, [3, 4, 4, 6, 1, 4, 4]) 글 제목:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_MaxCounters-Answer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_MinAvgTwoSlice-Answer",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[1]:   def solution(A):     Min=10000     MinAvg=0          j=0     i=0     while len(A)-3&gt;i:         MinAvg=(A[i]+A[i+1])/2         if Min&gt;MinAvg:             Min=MinAvg             j=i         MinAvg=(A[i]+A[i+1]+A[i+2])/3         if Min&gt;MinAvg:             Min=MinAvg             j=i         i+=1              if len(A)&gt;2:         MinAvg=(A[len(A)-1]+A[len(A)-2]+A[len(A)-3])/3         if Min&gt;MinAvg:             Min=MinAvg             j=len(A)-3              MinAvg=(A[len(A)-1]+A[len(A)-2])/2     if Min&gt;MinAvg:         Min=MinAvg         j=len(A)-2              return j      글 제목: codility_MinAvgTwoSlice-Answer 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_MinAvgTwoSlice-Answer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_MinAvgTwoSlice-Append",
        "excerpt":"#!/usr/bin/env python # coding: utf-8 # In[21]: def solution(A): Avg=[] i=0 N=0 Top=[10000000,0] while len(A)&gt;i: j=0 while len(A)-i&gt;j: if j==0: j+=1 else: Avg.append(((A[i+j-1]*j) + A[i+j]) / (j+1)) N+=1 j+=1 print(Avg,N) if N!=0 and Avg[N-1]&lt;Top[0]: Top[0]=Avg[N-1] Top[1]=N-1 i+=1 print(Avg) print(Top) Sum=len(A)*(len(A)+1)/2 - Top[1] i=0 while 1: Sum-=i if 0&gt;Sum: break i+=1...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_MinAvgTwoSlice-Append/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_PassingCars",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[11]:   def solution(A):     Result=0     Num=0     i=0     j=len(A)-1     while(j&gt;0):         j=len(A)-i-1         if A[j] == 0:             Result+=Num         else:             Num+=1         i+=1                  if Result&gt;1000000000:             return -1              return Result   # In[12]:   solution([0, 1, 0, 1, 1] )      글 제목: codility_PassingCars 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_PassingCars/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_PermCheck",
        "excerpt":" #!/usr/bin/env python # coding: utf-8  # In[ ]:   def solution(A):     A.sort()     i=0     while(len(A)&gt;i):         if(A[i]!=i+1):             return 0         i+=1      return 1   # In[ ]:   solution([4,1,3,2]) solution([4,1,3])   # In[ ]:         글 제목: codility_PermCheck 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_PermCheck/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "codility_num3",
        "excerpt":" from itertools import combinations  Min = 3000001 Num = list( map(int, input().split()) )  cmds = list(combinations(sorted(Num), 3))  cmds.sort(key=lambda x:abs(sum(x)))  print(cmds[0])     글 제목: codility_num3 수정 시간: 2019-08-14 16:40:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/codility_num3/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Recur vs Iter",
        "excerpt":"#2168 ''' n,m = map(int,input().split()) MAX, MIN = max(n,m), min(n, m) number, divisor = MAX, MIN while (number % divisor) != 0: remainder = number % divisor number = divisor divisor = remainder print(int(( MAX/divisor + MIN/divisor -1) * divisor)) ''' #15965 ''' primary=[2] K = int(input()) length = 1...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/recurIter/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "coder vs programmer",
        "excerpt":"공학이란 순수 과학과 달리 현실적 문제 해결이 중요하다. 현실적 문제 해결이란 일상 속 Fail point 발견부터 문제에 내제된 의미를 파악하여 최적화 된 해결과 가치를 부여하는 것 까지 포함된다. 순수과학과 공학은 이러한 점이 달라 보다 기술을 현실로 이어준다는 점을 공학도라면 알아야 한다. 나는 기술을 대하는 이 마음가짐이 코더와 프로그래머를 가르는 시작점이라...","categories": ["ProjectDesign"],
        "tags": ["Private","ahg223"],
        "url": "http://localhost:4000/projectdesign/private/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Start",
        "excerpt":"멀티호스팅 환경에서 하이퍼레저 구축이 목표  aws + hyperledger + kafka 구축 완료      시간이 날 때 설명할 예정   글 제목: Start 수정 시간: 2019-09-09 16:51:00 +0000  ","categories": ["ModernCS"],
        "tags": ["Hyperledger","Kafka","Zookeeper"],
        "url": "http://localhost:4000/moderncs/Hyperledger/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "GG<3 - Intro",
        "excerpt":"code Client App Admin Tool 프로젝트 기획 계기 및 의도 내가 프로그래밍을 좋아하는 이유는 그 어떤 공학보다 현실에 밀접하기 때문이다 IT 기술의 발전이 무섭다는 뉘앙스를 자주 접하는데, 역으로 높은 가치를 추구할 수 있는 기술 또한 IT라 생각한다. 그러니 가치를 추구하며 현실을 개선해보자 - 게임에 대한 사회적 인식 개선 프로젝트 중...","categories": ["ProjectDesign"],
        "tags": ["Software Maestro","ProjectDesign"],
        "url": "http://localhost:4000/projectdesign/GGHeart_Intro/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "GG<3 - PT1",
        "excerpt":"code    Client App  Admin Tool   현 게임 산업 규모에 대한 소개                     글 제목: GG&lt;3 - PT1 수정 시간: 2019-09-09 16:51:00 +0000  ","categories": ["ProjectDesign"],
        "tags": ["Software Maestro","ProjectDesign"],
        "url": "http://localhost:4000/projectdesign/GGHeart_PT1/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "GG<3 - PT2",
        "excerpt":"code    Client App  Admin Tool                    글 제목: GG&lt;3 - PT2 수정 시간: 2019-09-09 16:51:00 +0000  ","categories": ["ProjectDesign"],
        "tags": ["Software Maestro","ProjectDesign"],
        "url": "http://localhost:4000/projectdesign/GGHeart_PT2/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "GG<3 - System",
        "excerpt":"code    Client App  Admin Tool   GG&lt;3 시스템 구성도 및 시연 영상                              글 제목: GG&lt;3 - System 수정 시간: 2019-09-09 16:51:00 +0000  ","categories": ["ProjectDesign"],
        "tags": ["Software Maestro","ProjectDesign"],
        "url": "http://localhost:4000/projectdesign/GGHeart_System/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SKT Intern",
        "excerpt":"프로젝트 기획 계기 및 의도 인턴 최종 과제로 “Next Device - 20대를 위한 NUGU”를 기획해오라는 과제를 받음 5명의 인턴이 팀을 구성했는데, 디자인 대학원생, 경영, 컴공, 컴교 대학생으로 굉장히 다양했음 네명의 전공과 각각의 기획 방식이 전부 달랐기에 불협화음이 꽤 있었다 제품 기획은 디자인의 접근이 맞다고 생각해 크리에이티브 띵킹을 메인으로, 가능성 확인에서...","categories": ["Private"],
        "tags": ["Intern","AI","UX","Intro"],
        "url": "http://localhost:4000/private/SKTintern_intro/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "자바 학습을 위한 슈팅게임 - Intro",
        "excerpt":"video : https://www.youtube.com/watch?v=paIpaJ5Geao  code : https://github.com/ahg223/MiniGame   객체지향 프로그래밍을 공부하기 위해 진행함   글 제목: 자바 학습을 위한 슈팅게임 - Intro 수정 시간: 2019-09-09 16:51:00 +0000  ","categories": ["ToyProject"],
        "tags": ["ToyProject","Java","Intro"],
        "url": "http://localhost:4000/toyproject/ShootingGame_intro/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "군복무 후기",
        "excerpt":"평범한 6개월의 발전병과, 실청 후 6개월의 입원 조용히 책을 읽고 전공 공부를 하려고 공군 지원 후 노력해 발전병으로 특기 배정 과한 스트레스 때문에 실청 뒤 200일 입원 입원 중 많은 생각을 했고, 전역한 뒤 꼭 사회를 위한 프로젝트를 진행해보자 각오함 복귀 후 BX로 보직 변경과 BX 운영 부대에서 배려해 일정기간...","categories": ["Private"],
        "tags": ["Private"],
        "url": "http://localhost:4000/private/Military/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_",
        "excerpt":"     글 제목: programmers_ 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_다리를 지나는 트럭",
        "excerpt":"def solution(bridge_length, weight, truck_weights): q=[0]*bridge_length sec=0 while q: sec+=1#시작했으므로 1초씩 더함 q.pop(0)#트럭이 지나감 if truck_weights: if sum(q)+truck_weights[0]&lt;=weight: q.append(truck_weights.pop(0))#다리에 트럭 올림 else: q.append(0)#중량 초과면 트럭 안올림 return sec ''' def solution(bridge_length, weight, truck_weights): answer = 0 truck_weights.sort() while truck_weights != []: trucks=[] trucks_sum=0 trucks.append(truck_weights.pop(0)) trucks_sum+=trucks[0] for i in range(len(truck_weights)): temp=0 if...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%8B%A4%EB%A6%AC%EB%A5%BC-%EC%A7%80%EB%82%98%EB%8A%94-%ED%8A%B8%EB%9F%AD/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_쇠막대기",
        "excerpt":" def solution(arrangement):     answer = 0     stack = 0      if arrangement[0]==\"(\":         stack+=1     else:         stack-=1              for i in range(1,len(arrangement)):         if arrangement[i]==\"(\":             stack+=1         else:             stack-=1             if arrangement[i-1]==\")\":                 answer+=1             else:                 answer+=stack     return answer    글 제목: programmers_쇠막대기 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%87%A0%EB%A7%89%EB%8C%80%EA%B8%B0/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_프린터",
        "excerpt":" def solution(priorities, location):     answer = 0     while True:         flag=True         order1=priorities.pop(0)         for order2 in priorities:             if order1&lt;order2:                 flag=False                 break                  if flag==True:             answer+=1             if location==0: break             location-=1         elif flag==False:             if location==0: location+=len(priorities)+1             location-=1             priorities.append(order1) #        print(priorities,location)     return answer    글 제목: programmers_프린터 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%ED%94%84%EB%A6%B0%ED%84%B0/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_H-Index",
        "excerpt":" def solution(citations):     citations.sort(reverse=True)     print(citations)     for i in range(len(citations)):         if citations[i]&gt;=i+1 and len(citations)==i+1: return i+1         #elif citations[i]&gt;=i+1 and citations[i+1]&lt;i+1 and i+1&gt;=len(citations)-i-1: return i+1         elif citations[i]&gt;=i+1 and citations[i+1]&lt;=i+1: return i+1    글 제목: programmers_H-Index 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-H-Index/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_K번째수",
        "excerpt":" def solution(array, commands):     answer = []      for command in commands:         temp=array[command[0]-1:command[1]]         temp.sort()         answer.append(temp[command[2]-1])     return answer    글 제목: programmers_K번째수 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-K%EB%B2%88%EC%A7%B8%EC%88%98/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_N으로 표현",
        "excerpt":"def solution(N, number): ALL = [[N]] for i in range(2, 9): tmp2=0 for j in range(i): tmp2+= N*10**j tmp = [tmp2] for index in range(0, int(i // 2)): for x in ALL[index]: for y in ALL[i - index - 2]: tmp.append(x + y) tmp.append(x * y) if x - y...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-N%EC%9C%BC%EB%A1%9C-%ED%91%9C%ED%98%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_N진수 게임",
        "excerpt":" def pre(n,temp):     Num=[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\"]     Answer=\"\"     while temp!=-1:         Answer=Num[temp%n]+Answer         temp=temp//n         if temp==0: temp=-1     return Answer  def solution(n, t, m, p):     answer = ''     Data=''     temp=0     while t*m&gt;len(Data):         Data+=pre(n,temp)         temp+=1              temp=0     while t!=len(answer):         i=temp*m+p-1         answer+=Data[i]         temp+=1          return answer    글 제목: programmers_N진수 게임 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-N%EC%A7%84%EC%88%98-%EA%B2%8C%EC%9E%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_가장 먼 노드",
        "excerpt":"def solution(n, edge): graph =[ [] for _ in range(n + 1) ] distances = [ 0 for _ in range(n) ] is_visit = [False for _ in range(n)] queue = [0] is_visit[0] = True for (a, b) in edge: graph[a-1].append(b-1) graph[b-1].append(a-1) while queue: i = queue.pop(0) for j in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EA%B0%80%EC%9E%A5-%EB%A8%BC-%EB%85%B8%EB%93%9C/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_가장 큰 수",
        "excerpt":" def solution(numbers):     numbers = list(map(str, numbers))     length = max([len(x) for x in numbers])     numbers.sort(key=lambda x: x*length, reverse=True)     return str(int(''.join(numbers)))    글 제목: programmers_가장 큰 수 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EA%B0%80%EC%9E%A5%ED%81%B0%EC%88%98/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_구명보트",
        "excerpt":"def solution(people, limit): people.sort() length=len(people) i=0 heavy=length-1 count=0 while(i&lt;heavy): if people[i]&gt;limit//2: break elif people[heavy]&lt;=limit//2: count += (heavy-i+1)//2 break elif people[i]+people[heavy]&lt;=limit: count+=1 i+=1 heavy-=1 else: heavy-=1 return length-count def solution(people, limit): people.sort() length=len(people) i=0 heavy=length-1 count=0 while(i&lt;heavy): if people[i]+people[heavy]&lt;=limit: count+=1 i+=1 heavy-=1 else: heavy-=1 return length-count 글 제목: programmers_구명보트 수정 시간:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EA%B5%AC%EB%AA%85%EB%B3%B4%ED%8A%B8/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_기능개발",
        "excerpt":" def solution(progresses, speeds):     answer = []      while progresses != []:         Up=1         First=progresses.pop(0)         Due=(100-First)//speeds.pop(0) +1         while progresses!=[]:             if progresses[0]+Due*speeds[0]&gt;100:                 Up+=1                 progresses.pop(0)                 speeds.pop(0)             else: break         answer.append(Up)     return answer    글 제목: programmers_기능개발 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EA%B8%B0%EB%8A%A5%EA%B0%9C%EB%B0%9C/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_길 찾기 게임",
        "excerpt":"import sys sys.setrecursionlimit(10**6) class Node(object): def __init__(self, index, data): self.index = index self.data = data self.left = self.right = None class BinarySearchTree(object): def __init__(self): self.root = None self.order1=[] self.order2=[] def insert(self, index, data): self.root = self._insert_value(self.root,index, data) return self.root is not None def _insert_value(self, node,index, data): if node is None:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EA%B8%B8-%EC%B0%BE%EA%B8%B0-%EA%B2%8C%EC%9E%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_네트워크",
        "excerpt":"visited=[] answer=0 def iter(computers,i): global answer global visited visited.append(i) for j in range(len(computers)+1): if j==len(computers): break if j not in visited and computers[i][j]!=0: iter(computers,j) def solution(n, computers): global answer global visited New=0 while True: if len(visited)==len(computers): break iter(computers,New) answer+=1 for New in range(len(computers)): if New not in visited: break return...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_뉴스 클러스터링",
        "excerpt":"def dic(str1): List=[] str1=list(str1) alphabet=[\"a\",\"b\",\"c\",\"d\",\"e\",\"f\",\"g\",\"h\",\"i\",\"j\",\"k\",\"l\",\"m\",\"n\",\"o\",\"p\",\"q\",\"r\",\"s\",\"t\",\"u\",\"v\",\"w\",\"x\",\"y\",\"z\"] temp=str(str1[0]) for i in range(1,len(str1)): if len(temp)!=2: temp=temp+str(str1[i]) else: temp=temp[1]+str(str1[i]) temp=temp.lower() if temp[0] in alphabet and temp[1] in alphabet: List.append(temp) return List def solution(str1, str2): str1, str2= dic(str1), dic(str2) List=[] while True: Flag=False for i in range(len(str1)): for j in range(len(str2)): if str1[i]==str2[j]: List.append(str1[i]) str1.pop(i)...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%89%B4%EC%8A%A4-%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EB%A7%81/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_다트 게임",
        "excerpt":"def solution(dartResult): score=[] number=[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"10\"] temp=\"\" for i in range(len(dartResult)): if dartResult[i] in number: temp+=dartResult[i] if dartResult[i] == \"S\": score.append(int(temp)**1) temp=\"\" elif dartResult[i] == \"D\": score.append(int(temp)**2) temp=\"\" elif dartResult[i] == \"T\": score.append(int(temp)**3) temp=\"\" if dartResult[i] == \"*\" and len(score)==1: score[0]=score[0]*2 elif dartResult[i] == \"*\": score[-1], score[-2]=score[-1]*2, score[-2]*2 if dartResult[i] == \"#\":...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%8B%A4%ED%8A%B8-%EA%B2%8C%EC%9E%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_단속카메라",
        "excerpt":" def solution(routes):     answer = 1     routes.sort()     temp=routes.pop(0)      while routes!=[]:         temp[0]=routes[0][0]         if temp[1]&gt;routes[0][1]: temp[1]=routes[0][1]                 if temp[1]&lt;routes[0][0]:             temp[1]=routes[0][1]             answer+=1         routes.pop(0)              return answer    글 제목: programmers_단속카메라 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%8B%A8%EC%86%8D%EC%B9%B4%EB%A9%94%EB%9D%BC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_단어 변환",
        "excerpt":"import sys temp=0 answer=sys.maxsize def iter(begin, target, words): global temp global answer if words==[]: return for i in range(len(words)): correct=0 for j in range(len(begin)): if words[i][j]==begin[j]: correct+=1 if correct==len(begin)-1: temp+=1 if words[i]==target and answer&gt;temp: answer=temp else: iter(words[i],target,words[:i]+words[i+1:]) temp-=1 def solution(begin, target, words): iter(begin, target,words) if answer==sys.maxsize: return 0 else: return...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%8B%A8%EC%96%B4-%EB%B3%80%ED%99%98/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_더 맵게",
        "excerpt":"def solution(scoville, K): import heapq data = [] for s in scoville: heapq.heappush(data, s) answer = 0 while len(data) &gt;0: if data[0] &gt;= K: return answer a= heapq.heappop(data) if data != []: b =heapq.heappop(data) heapq.heappush(data,a + (b *2)) answer +=1 return -1 ''' heap=[] def down_heap(i): if len(heap)&gt;i*2+1 and heap[i*2+1]&lt;heap[i]:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%8D%94-%EB%A7%B5%EA%B2%8C/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_도둑질",
        "excerpt":"def solution(money): case1 = [0 for i in range(len(money))] case2 = [0 for i in range(len(money))] case1[0],case1[1]=money[0],money[0] case2[0],case2[1]=0,money[1] for i in range(2, len(money)-1): case1[i]=max(case1[i - 1], money[i] + case1[i - 2]) case2[i]=max(case2[i - 1], money[i] + case2[i - 2]) case2[-1]=max(case2[-2], money[-1] + case2[-3]) return max(case1[-2], case2[-1]) 글 제목: programmers_도둑질 수정...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%8F%84%EB%91%91%EC%A7%88/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_등굣길",
        "excerpt":"def solution(m, n, puddles): matrix = [[0]*(m+1) for i in range(n+1)] for i in range(len(puddles)): matrix[puddles[i][1]][puddles[i][0]] = -1 for i in range(1,n+1): for j in range(1,m+1): if i ==1 and j == 1: matrix[i][j] = 1 continue if matrix[i][j] == -1: matrix[i][j] = 0 continue matrix[i][j] = (matrix[i-1][j] + matrix[i][j-1])...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%93%B1%EA%B5%A3%EA%B8%B8/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_디스크 컨트롤러",
        "excerpt":" import sys  def solution(jobs):     answer = 0     i=0     run=0     Len=len(jobs)     jobs.sort()          while jobs!=[]:         Min=sys.maxsize         for j in range(len(jobs)):             if jobs[j][0]&gt;run:break             if Min&gt;jobs[j][1]: Min,i=jobs[j][1],j         if Min==sys.maxsize: run=jobs[0][0]         run+=jobs[i][1]         answer+=run-jobs[i][0]         jobs.pop(i)             return answer//Len    글 제목: programmers_디스크 컨트롤러 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%94%94%EC%8A%A4%ED%81%AC-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_라면공장",
        "excerpt":"def solution(stock, dates, supplies, k): answer = 0 date = 0 idx = 0 reserve = [] while stock &gt; 0: stock -= 1 date += 1 if idx &lt; len(dates) and date &gt;= dates[idx]: reserve.append(supplies[idx]) idx += 1 elif idx &lt; len(dates): if stock != 0 and date +...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%9D%BC%EB%A9%B4%EA%B3%B5%EC%9E%A5/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_매칭 점수",
        "excerpt":"def Basic(word,temp): Flag=True A=\"\" temp=temp.split(\" \") for i in range(len(temp)-1,-1,-1): if \"&lt;/\" in temp[i]: temp.pop(i) Flag=False elif \"&gt;\" in temp[i]: while True: a=temp.pop(i) if \"&lt;\" in a: break i+=1 Flag=True elif Flag: temp.pop(i) for i in temp: A+=\" \"+i print(A) return A.upper().count(word.upper()) def solution(word, pages): DB=[] answer=[] for page in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%A7%A4%EC%B9%AD-%EC%A0%90%EC%88%98/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_모의고사",
        "excerpt":"from collections import defaultdict def solution(answers): answer = [] one = [1, 2, 3, 4, 5] two = [2, 1, 2, 3, 2, 4, 2, 5] three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] x = defaultdict(int) max_score = 0 for i in range(len(answers)) : ans...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%AA%A8%EC%9D%98%EA%B3%A0%EC%82%AC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_무지의 먹방 라이브",
        "excerpt":"def solution(food_times, k): if sum(food_times) &lt;= k : return -1 Food = sorted(food_times) i=0 k -= Food[i] * (len(Food) - i) while k &gt; 0 : i += 1 k -= (Food[i] - Food[i-1]) * (len(Food) - i) temp= Food[i] while k &lt; 0: temp -= 1 k += len(Food)...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%AC%B4%EC%A7%80%EC%9D%98-%EB%A8%B9%EB%B0%A9-%EB%9D%BC%EC%9D%B4%EB%B8%8C/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_방금그곡",
        "excerpt":"def pre(Data): Answer=\"\" for i in Data: Answer+=i if i==\"#\": if Answer[-2]==\"C\": Answer=Answer[:-2]+\"c\" elif Answer[-2]==\"D\": Answer=Answer[:-2]+\"d\" elif Answer[-2]==\"F\": Answer=Answer[:-2]+\"f\" elif Answer[-2]==\"G\": Answer=Answer[:-2]+\"g\" else: Answer=Answer[:-2]+\"a\" return Answer def Preprocessing(Data): i,j=Data.pop(0),Data.pop(0) hh,mm=i.split(\":\") i=int(hh)*60+int(mm) hh,mm=j.split(\":\") j=int(hh)*60+int(mm) if i&gt;j: Data.insert(0,1440-i%1440) else: Data.insert(0,j%1440-i%1440) Data.append(pre(Data.pop())) j=len(Data[2]) temp=\"\" for i in range(Data[0]): temp+=Data[2][i%j] Data[2]=temp return Data def...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%B0%A9%EA%B8%88-%EA%B7%B8%EA%B3%A1/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_방의 개수",
        "excerpt":"def solution(arrows): dirs = [ (0, 1), (1, 1), (1, 0), (1, -1), (0, -1), (-1, -1), (-1, 0), (-1, 1) ] vertex = set() edge = set() (x, y) = (0, 0) vertex.add((x, y)) for arrow in arrows: for _ in range(2): (nx, ny) = ( x + dirs[arrow][0],...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%B0%A9%EC%9D%98-%EA%B0%9C%EC%88%98/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_베스트엘범",
        "excerpt":"def solution(genres, plays): answer = [] temp = [] temp2 = [0 for x in range(100)] temp3 = [[-1,-1,-1,-1] for x in range(100)] temp4 = [] for i in range(len(genres)): if genres[i] not in temp: temp.append(genres[i]) temp2[temp.index(genres[i])]+=plays[i] if temp3[temp.index(genres[i])][2]&lt;plays[i]: temp3[temp.index(genres[i])][1]=temp3[temp.index(genres[i])][0] temp3[temp.index(genres[i])][3]=temp3[temp.index(genres[i])][2] temp3[temp.index(genres[i])][0]=i temp3[temp.index(genres[i])][2]=plays[i] elif temp3[temp.index(genres[i])][3]&lt;plays[i]: temp3[temp.index(genres[i])][1]=i temp3[temp.index(genres[i])][3]=plays[i] for i in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%B2%A0%EC%8A%A4%ED%8A%B8%EC%97%98%EB%B2%94/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_블록게임",
        "excerpt":"def Possible(board, x, y): for i in range(x): if board[i][y] != 0: return False return True def Tile(board, x, y): Num=board[x][y] try: if board[x+1][y] == Num and board[x+2][y] == Num and board[x+2][y+1] == Num: if Possible(board, x+2, y+1) and Possible(board, x+2, y): board[x][y] = board[x+1][y] = board[x+2][y] = board[x+2][y+1] =...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%B8%94%EB%A1%9D%EA%B2%8C%EC%9E%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_비밀지도",
        "excerpt":"def Bin(arr): for i in range(len(arr)): temp=str(bin(arr.pop(i))) temp=temp[2:] while True: if len(temp)==len(arr)+1: break else: temp=\"0\"+temp arr.insert(i,list(temp)) return arr def solution(n, arr1, arr2): answer = [] arr1, arr2=Bin(arr1), Bin(arr2) for i in range(n): temp=\"\" for j in range(n): if arr1[i][j] ==\"0\" and arr2[i][j] == \"0\": temp+=\" \" if arr1[i][j] ==\"1\" or...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EB%B9%84%EB%B0%80%EC%A7%80%EB%8F%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_서울에서 경산까지",
        "excerpt":"def solution(K, travel): Answer=[[0 for i in range(K+1)] for j in range(len(travel)+1)] for i in range(1,len(travel)+1): [Wtime,Wmoney,Btime,Bmoney]=travel[i-1] for j in range(K+1): walk,bike=-1,-1 if j&gt;=Wtime and Answer[i-1][j-Wtime]!=-1: walk=Answer[i-1][j-Wtime]+Wmoney if j&gt;=Btime and Answer[i-1][j-Btime]!=-1: bike=Answer[i-1][j-Btime]+Bmoney Answer[i][j]=max(walk,bike) for i in Answer: for j in i:print(j,end=\" \") print(\"\\n\") return Answer[len(travel)][K] 글 제목: programmers_서울에서 경산까지 수정...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%84%9C%EC%9A%B8%EC%97%90%EC%84%9C-%EA%B2%BD%EC%82%B0%EA%B9%8C%EC%A7%80/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_섬 연결하기",
        "excerpt":"import sys def solution(n, costs): answer = 0 costs.sort(key=lambda i:i[2]) memory=[costs[0][0],costs[0][1]] answer+=costs[0][2] costs.pop(0) costs.sort(key=lambda i:i[0]) while len(memory)!=n: print(memory,answer,costs) temp=n+1 Min=sys.maxsize for j in range(len(costs)): #if costs[j][0] &gt; max(memory): break if costs[j][0] in memory and costs[j][1] not in memory and Min&gt;costs[j][2]: temp=j Min=costs[j][2] elif costs[j][0] not in memory and costs[j][1] in...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%84%AC-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_셔틀버스",
        "excerpt":"def time(List): for i in range(len(List)): temp=List.pop(0) List.append(60*int(temp[:2])+int(temp[3:])) List.sort(reverse=False) return List def Answer(answer): hh=str(answer//60) mm=str(answer%60) if len(hh)!=2: hh='0'+hh if len(mm)!=2: mm='0'+mm return hh+\":\"+mm def solution(n, t, m, timetable): answer=540 timetable=time(timetable) start=540-t for i in range(n): start+=t if i==n-1: if len(timetable)&gt;=m and start&gt;=timetable[m-1]: answer=timetable[m-1]-1 else: answer=start break for j in range(m):...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%85%94%ED%8B%80%EB%B2%84%EC%8A%A4/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_소수 찾기",
        "excerpt":"def permutation(list_arr,num,flag): if flag==0: temp=\"\" for i in num: temp+=i list_arr.append(int(temp)) return; for i in range(flag-1,-1,-1): num[i],num[flag-1]=num[flag-1],num[i] permutation(list_arr,num,flag-1) num[i],num[flag-1]=num[flag-1],num[i] def Isprime(list_arr,answer): for List in list_arr: isprime=True if List==1 or List==0: isprime=False num=2 while (num*num)&lt;=List: if List%num==0: isprime=False break num+=1 if isprime==True: answer+=1 return answer def solution(numbers): answer = 0 list_arr=[]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%86%8C%EC%88%98-%EC%B0%BE%EA%B8%B0/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_순위",
        "excerpt":"def solution(n, results): answer = 0 matrix = [ [ 0 for _ in range(n+1) ] for _ in range(n+1) ] for (win, lose) in results: matrix[win][lose],matrix[lose][win] = win,win for _ in range(2): for win in range(1,n+1): for lose in range(1,n+1): if win == matrix[win][lose]: for i, j in enumerate(matrix[lose]):...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%88%9C%EC%9C%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_숫자야구",
        "excerpt":"from itertools import permutations as perm def solution(List): remove_list=[] result = [''.join(x) for x in perm('123456789',3)] for trying in List: numbers = list(str(trying[0])) strike = trying[1] ball = trying[2] strike_count = 0 ball_count = 0 case_list=[] for i in result: comp_numbers=list(str(i)) case_list=[[numbers[n],comp_numbers[m]] for n in range(3) for m in range(3)]...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%88%AB%EC%9E%90%EC%95%BC%EA%B5%AC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_스킬트리",
        "excerpt":" def solution(skill, skill_trees):     answer = len(skill_trees)      for user in skill_trees:         List=[]         Flag=True         for nope in skill:             try:                  index=user.index(nope)                 for i in List:                     if i&gt;index:                         answer-=1                         Flag=False                         break                 if Flag==True: List.append(index)                 else: break             except ValueError:                 List.append(10000)         #print(List)      return answer    글 제목: programmers_스킬트리 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%8A%A4%ED%82%AC%ED%8A%B8%EB%A6%AC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_실패율",
        "excerpt":"def solution(N, stages): answer = [] _=[] total=[[0,0] for i in range(N+2)] player=len(stages) for i in stages: total[i][0]+=1 total.pop() for i in range(1,N+1): player-=total[i-1][0] total[i][1]=player for i,x in enumerate(total): if i==0: continue if x[1]!=0: _.append([i,x[0]/x[1]]) else: _.append([i,0]) _.sort(key=lambda x: x[1],reverse=True) for i,j in _: answer.append(i) return answer 글 제목: programmers_실패율...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%8B%A4%ED%8C%A8%EC%9C%A8/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_압축",
        "excerpt":"Dic=[0,\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\",\"H\",\"I\",\"J\",\"K\",\"L\",\"M\",\"N\",\"O\",\"P\",\"Q\",\"R\",\"S\",\"T\",\"U\",\"V\",\"W\",\"X\",\"Y\",\"Z\"] i=0 answer=[] def recur(msg,temp): global answer global Dic global i try: _=temp[-1]+msg[i+1] except IndexError: i+=1 answer.append(Dic.index(temp[-1])) return i+=1 if _ in Dic: temp.append(_) recur(msg,temp) return else: Dic.append(_) j=Dic.index(temp[-1]) answer.append(j) def solution(msg): global answer global Dic global i while len(msg)&gt;i: temp=[] temp.append(msg[i]) recur(msg,temp) return answer 글 제목: programmers_압축 수정 시간:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%95%95%EC%B6%95/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_여행경로",
        "excerpt":" answer=[]  def iter(tickets):     for i in range(len(tickets)):         if tickets[i][0]==answer[-1]:             temp=tickets.pop(i)             answer.append(temp[1])             iter(tickets)             if len(tickets)==0: return             tickets.insert(i,temp)             answer.pop(-1)  def solution(tickets):     tickets.sort()     for i in range(len(tickets)):         if tickets[i][0]==\"ICN\":             temp=tickets.pop(i)             answer.append(temp[0])             answer.append(temp[1])             iter(tickets)             if len(tickets)==0: break             answer.pop()             answer.pop()             tickets.insert(i,temp)     return answer    글 제목: programmers_여행경로 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%97%AC%ED%96%89%EA%B2%BD%EB%A1%9C/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_예산",
        "excerpt":" def solution(budgets, M):     answer = 0     budgets.sort()      for i in range(len(budgets)):         if budgets[i]&gt;=M//(len(budgets)-i):             answer=M//(len(budgets)-i)             break         M-=budgets[i]     if answer==0: return budgets[-1]     return answer    글 제목: programmers_예산 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%98%88%EC%82%B0/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_오픈채팅방",
        "excerpt":" def solution(record):     answer = []     Answer=[]     ID={}      for cmd in record:         cmd=cmd.split()         if cmd[0]==\"Change\": ID[cmd[1]]=cmd[2]                  elif cmd[0]==\"Enter\":              ID[cmd[1]]=cmd[2]             answer.append([cmd[1],\"님이 들어왔습니다.\"])         elif cmd[0]==\"Leave\": answer.append([cmd[1],\"님이 나갔습니다.\"])      for cmd in answer:         Answer.append(str(ID[cmd[0]]+cmd[1]))     return Answer    글 제목: programmers_오픈채팅방 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%98%A4%ED%94%88%EC%B1%84%ED%8C%85%EB%B0%A9/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_완주하지 못한 선수",
        "excerpt":" def solution(participant, completion):     participant.sort()     completion.sort()     for i in range(len(participant)-1,-1,-1):         Flag=True         for j in range(len(completion)-1,-1,-1):             if participant[i] == completion[j]:                 participant.pop(i)                 completion.pop(j)                 Flag=False                 break         if Flag==True: return participant[i]    글 제목: programmers_완주하지 못한 선수 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%99%84%EC%A3%BC%ED%95%98%EC%A7%80-%EB%AA%BB%ED%95%9C-%EC%84%A0%EC%88%98/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_위장",
        "excerpt":" def solution(clothes):     answer=1     temp = []     temp2 = [0 for x in range(30)]     for i in clothes:         if i[1] not in temp: temp.append(i[1])         temp2[temp.index(i[1])]+=1     for i in temp2:         if i==0: break         answer*=(i+1)     return answer-1    글 제목: programmers_위장 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%9C%84%EC%9E%A5/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_이중우선순위큐",
        "excerpt":" def solution(operations):     answer = []      for i in range(len(operations)):         if operations[i][0]==\"I\":              answer.append(int(operations[i][2:]))             answer.sort()         elif len(answer)&gt;0 and int(operations[i][2:])==-1: answer.pop(0)         elif len(answer)&gt;0 and int(operations[i][2:])==1: answer.pop(-1)              if answer==[]: return[0,0]     else:          temp=[]         temp.append(answer.pop(-1))         temp.append(answer.pop(0))         return temp    글 제목: programmers_이중우선순위큐 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%9D%B4%EC%A4%91%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84%ED%81%90/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_자동완성",
        "excerpt":"def solution(words): answer = 0 words.sort() for i in range(len(words)): temp1, temp2 = 0, 0 Flag=False if i!=0: for j in range(len(words[i])): if j==len(words[i-1]): Flag=True break if words[i][j]==words[i-1][j]: temp1+=1 else: Flag=True break if Flag:temp1+=1 Flag=False if i!=len(words)-1: for j in range(len(words[i])): if j==len(words[i+1]): Flag=True break if words[i][j]==words[i+1][j]: temp2+=1 else: Flag=True...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%9E%90%EB%8F%99%EC%99%84%EC%84%B1/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_저울",
        "excerpt":" def solution(weight):     answer = 0     weight.sort()      while weight!=[]:         answer+=weight.pop(0)         if weight==[]: break         if answer&lt;weight[0]-1: break      return answer+1    글 제목: programmers_저울 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%A0%80%EC%9A%B8/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_전화번호 목록",
        "excerpt":" def solution(phone_book):      phone_book.sort(key= lambda x: len(x))     for i in range(len(phone_book)):         temp=phone_book.pop(0)         for j in range(len(phone_book)):             length=0             while length!=len(temp):                 if temp[length] == phone_book[j][length]: length+=1                 else: break             #print(temp, phone_book[j],length)             if length==len(temp): return False     return True    글 제목: programmers_전화번호 목록 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8-%EB%AA%A9%EB%A1%9D/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_정수 삼각형",
        "excerpt":" def solution(triangle):     TRIANGLE=[]     for i in triangle:         List=[]         for j in i:List.append(0)         TRIANGLE.append(List)     TRIANGLE[0][0]=triangle[0][0]      for depth in range(1,len(triangle)):         for index in range(len(triangle[depth])):             if index!=0:                 if TRIANGLE[depth][index]&lt;triangle[depth][index]+TRIANGLE[depth-1][index-1]:                     TRIANGLE[depth][index]=triangle[depth][index]+TRIANGLE[depth-1][index-1]             if index!=len(triangle[depth])-1:                 if TRIANGLE[depth][index]&lt;triangle[depth][index]+TRIANGLE[depth-1][index]:                     TRIANGLE[depth][index]=triangle[depth][index]+TRIANGLE[depth-1][index]     #print(TRIANGLE)     return max(TRIANGLE[len(triangle)-1])    글 제목: programmers_정수 삼각형 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%A0%95%EC%88%98-%EC%82%BC%EA%B0%81%ED%98%95/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_조이스틱",
        "excerpt":"def get_dct(nm, rev=False): i=0 rm_n=list(nm) ct=-1 while \"\".join(rm_n) != \"A\"*len(nm): if rm_n[i]!=\"A\": rm_n[i]=\"A\" ct+=1 i+=(-1 if rev else 1) return ct def solution(nm): az=\"ABCDEFGHIJKLMNOPQRSTUVWXYZ\" ct=0 for i, n in enumerate(nm): idx=az.index(n) idx_rv=len(az)-idx dis=idx if idx&lt;idx_rv else idx_rv ct+=dis ct_r,ct_l=get_dct(nm),get_dct(nm,rev=True) return ct+(ct_r if ct_r&lt;ct_l else ct_l) ''' def solution(name): answer =...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_주식가격",
        "excerpt":" def solution(prices):     answer = []     for i in range(len(prices)):         temp=0         for j in range(i,len(prices)): #            print(i,j,answer)             if prices[i]&gt;prices[j]:                 answer.append(temp)                 break             if j==len(prices)-1: answer.append(temp)             temp+=1      return answer    글 제목: programmers_주식가격 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%A3%BC%EC%8B%9D%EA%B0%80%EA%B2%A9/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_징검다리",
        "excerpt":"def solution(distance, rocks, n): if len(rocks) == n: return distance rocks.sort() rocks.append(distance) Min = 0 Max = rocks[-1] while Max &gt; (Min + 1): Mid = (Max + Min) // 2 prev = 0 count = 0 for rock in rocks: if rock - prev &lt; Mid: count += 1...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%A7%95%EA%B2%80%EB%8B%A4%EB%A6%AC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_체육복",
        "excerpt":" def solution(n, lost, reserve):     cross=[x for x in lost if x in reserve]     reserve=list(set(reserve)-set(cross))     lost=list(set(lost)-set(cross))     answer = n-len(lost)     count = 0     for i in range(len(reserve)):         for j in range(len(lost)):             if abs(reserve[i]-lost[j])==1:                 lost[j]=-1                 count+=1                 break     return answer+count    글 제목: programmers_체육복 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%B2%B4%EC%9C%A1%EB%B3%B5/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_추석 트래픽",
        "excerpt":"def make_log(log): log=log[0:-1] log=log.split() log.pop(0) log[0]=3600*float(log[0][0:2])+60*float(log[0][3:5])+float(log[0][6:]) log[1]=log[0]-float(log[1])+0.001 log[0],log[1]=log[1],log[0] return log def solution(lines): answer=0 Data=[] for log in lines: Data.append(make_log(log)) Data=sorted(Data,key=lambda x:x[0]) print(Data) heap=[] for log in Data: for _ in range(len(heap)-1,-1,-1): if len(heap)&gt;0 and heap[_][1]+1&lt;=log[0]: heap.pop(_) heap.append(log) if len(heap)&gt;answer: answer=len(heap) return answer 글 제목: programmers_추석 트래픽 수정 시간: 2019-09-20 11:29:00...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%B6%94%EC%84%9D-%ED%8A%B8%EB%9E%98%ED%94%BD/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_카드 게임",
        "excerpt":"def solution(left, right): Answer=[[0 for i in range(len(left)+1)] for j in range(len(right)+1)] for i in range(1,len(left)+1): for j in range(1,len(right)+1): if left[i-1] &gt; right[j-1]: Answer[i][j] = max(Answer[i-1][j-1], Answer[i-1][j], Answer[i][j-1]+right[j-1]) else: Answer[i][j] = max(Answer[i - 1][j - 1], Answer[i - 1][j]) return Answer[len(left)][len(right)] 글 제목: programmers_카드 게임 수정 시간: 2019-09-20 11:29:00...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%B9%B4%EB%93%9C-%EA%B2%8C%EC%9E%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_카펫",
        "excerpt":" def solution(brown, red):     answer = []     summ=2+brown//2     for column in range(3,summ):         row= summ-column         print(row,column,red)         if red==(row-2)*(column-2):             answer.append(row)             answer.append(column)             print(answer)             break      return answer    글 제목: programmers_카펫 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%B9%B4%ED%8E%AB/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_캐시",
        "excerpt":" def solution(cacheSize, cities):     answer = 0     cache=[]      if cacheSize==0: return len(cities)*5      while cities!=[]:         temp=cities.pop(0)         temp=temp.lower()         if temp in cache:              answer+=1             cache.append(cache.pop(cache.index(temp)))         elif cacheSize==len(cache):              cache.pop(0)             cache.append(temp)             answer+=5         else:             cache.append(temp)             answer+=5      return answer    글 제목: programmers_캐시 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%EC%BA%90%EC%8B%9C/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_큰 수 만들기",
        "excerpt":"def solution(number, k): answer = '' if k==1: temp=0 Min=number[0] i=0 while True: if i&gt;len(number)-2: break i+=1 if number[i]&lt;Min: Min=number[i] temp=i return number[:i]+number[i+1:] while k&gt;0: temp=0 Max=number[0] for i in range(1,k+1): if Max=='9': break if number[i]&gt;Max: Max=number[i] temp=i k=k-temp answer+=number[temp] number=number[temp+1:] return answer+number 글 제목: programmers_큰 수 만들기 수정 시간:...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%ED%81%B0-%EC%88%98-%EB%A7%8C%EB%93%A4%EA%B8%B0/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_타겟 넘버",
        "excerpt":" answer=0 temp=0  def iter(numbers, target,i):     global answer     global temp     if len(numbers)==i:         if target==temp: answer+=1         return          temp+=numbers[i]     iter(numbers,target,i+1)     temp-=(numbers[i]*2)     iter(numbers,target,i+1)     temp+=numbers[i]        def solution(numbers, target):     iter(numbers,target,0)     return answer    글 제목: programmers_타겟 넘버 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%ED%83%80%EA%B2%9F-%EB%84%98%EB%B2%84/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_타일 장식물",
        "excerpt":" def solution(N):     a=1     b=1     for i in range(N-2): a,b=b,a+b         return 4*b+2*a    글 제목: programmers_타일 장식물 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%ED%83%80%EC%9D%BC-%EC%9E%A5%EC%8B%9D%EB%AC%BC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_탑",
        "excerpt":" def solution(heights):     answer = []     for i in range(len(heights)-1,-1,-1):         for j in range(i,-1,-1):             if heights[i]&lt;heights[j]:                 answer.insert(0,j+1)                 break         if len(answer) != len(heights)-i: answer.insert(0,0)     return answer    글 제목: programmers_탑 수정 시간: 2019-09-20 11:29:00 +0000  ","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%ED%83%91/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_파일명 정렬",
        "excerpt":"def solution(files): answer = [] Data=[] Num=[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\"] for num,file in enumerate(files): file=file.lower() temp=[] Flag=False for i in range(len(file)): if file[i] in Num: if len(temp)==0: temp.append(i) Flag=True elif Flag: temp.append(i) else: Flag=False file=file[:temp[0]]+\"0\"*(5-len(temp))+file[temp[0]:temp[-1]+1] for i in range(100): file=file.replace(\" \",\"{\") file=file.replace(\"-\",\"}\") file=file.replace(\".\",\"~\") Data.append([num,file]) Data=sorted(Data,key= lambda x:x[1]) for i,_ in Data: answer.append(files[i]) return...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%ED%8C%8C%EC%9D%BC%EB%AA%85-%EC%A0%95%EB%A0%AC/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_프렌즈4블록",
        "excerpt":"def Board(board): for i in range(len(board)): temp=board.pop(i) board.insert(i,list(temp)) return board def solution(m, n, board): answer = 0 board=Board(board) while True: temp=[] for i in range(m-1): for j in range(n-1): List=[] List.append(board[i][j]) List.append(board[i][j+1]) List.append(board[i+1][j]) List.append(board[i+1][j+1]) if len(set(List))==1 and \"0\" not in List: temp.append([i,j]) if len(temp)==0: break for i,j in temp: if...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%ED%94%84%EB%A0%8C%EC%A6%884%EB%B8%94%EB%A1%9D/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "programmers_후보키",
        "excerpt":"import itertools def solution(relation): answer=0 Answer=[] Index=[] _, __ = range(len(relation[0])),range(1,len(relation[0])+1) ___=list(itertools.combinations(list(range(len(relation))),2)) for i in __: List=(itertools.combinations(list(_),i)) Index.extend(list(List)) for index in Index: Set=[] for i in range(len(relation)): temp=[] for j in index: temp.append(relation[i][j]) Set.append(temp) for x, y in ___: if x!=y and Set[x]==Set[y]: Set.append([]) break if len(Set)==len(relation): Answer.append(index) ___=list(itertools.combinations(list(range(len(Answer))),2)) Memory=[0...","categories": ["ProblemSolve"],
        "tags": ["ProblemSolve","python"],
        "url": "http://localhost:4000/problemsolve/programmers_-%ED%9B%84%EB%B3%B4%ED%82%A4/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Fabric Introduction",
        "excerpt":"Hyperledger 스마트 계약을 구현할 수 있는 오픈소스 기반의 프라이빗 블록체인 프로젝트이다. 리눅스재단(Linux Foundation)이 주관하고 있다. 금융, 사물인터넷(IoT), 물류, 제조, 기술 등 여러 산업에 걸쳐 응용 가능한 블록체인 기술을 만드는 것을 목표로 하고 있다. 프라이빗 블록체인 기술의 표준으로 자리잡고 있다. 이 외에도 리플, 이더리움등 다른 블록체인도 있다. 하지만 하이퍼레저가 특별한 이유는...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/fabric-introduction/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "PySpark Install",
        "excerpt":"Version OS MacOS Mojave Version 10.14.6 Java $ java -version openjdk version \"1.8.0_222\" OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_222-b10) OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.222-b10, mixed mode) $ javac -versionw javac 1.8.0_222 Scala $ scala -version Scala code runner version 2.13.0 -- Copyright 2002-2019, LAMP/EPFL and Lightbend, Inc. Install pyspark $...","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/pyspark-install/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "OOP Introduction",
        "excerpt":"OOP(Object Oriented Programming) 컴퓨터 프로그래밍의 패러다임 중 하나이다. 객체 지향 프로그래밍은 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 객체들의 모임으로 파악하고자 하는 것이다. 각각의 객체는 메시지를 주고받고, 데이터를 처리할 수 있다. 즉, 현실 세계를 프로그래밍으로 옮겨와 프로그래밍하는 것을 말한다. 현실 세계의 사물들을 객체라고 보고 그...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/oop/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Git Flow vs Github Flow vs Git Lab Flow",
        "excerpt":"Git Flow 기본 브런치는 5가지를 이야기한다. feature &gt; develop &gt; release &gt; hotfix &gt; master 브런치가 존재하며, 머지 순서는 앞에서 뒤로 진행된다. release 브런치와 hotfix 브런치의 경우, develop 브런치의 오른쪽에 존재하기에 모두 develop 브런치도 머지를 하도록 구성이 되어있다. Vincent Driessen은 관련하여 스크립트로 명령을 구성해놨으며, 그냥 설치를 하여 CLI에서 명령으로 작업을...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/gitflow/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "REST",
        "excerpt":"REST 월드 와이드 웹(World Wide Web a.k.a WWW)과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 아키텍처의 한 형식으로 자원을 정의하고 자원에 대한 주소를 지정하는 방법 전반에 대한 패턴 RESTful API REST란, REpresentational State Transfer 의 약자이다. 여기에 ~ful 이라는 형용사형 어미를 붙여 ~한 API 라는 표현으로 사용된다. 즉, REST 의 기본...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/rest/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "TDD",
        "excerpt":"TDD Test-Driven Development(TDD)는 매우 짧은 개발 사이클의 반복에 의존하는 소프트웨어 개발 프로세스이다. 우선 개발자는 요구되는 새로운 기능에 대한 자동화된 테스트케이스를 작성하고 해당 테스트를 통과하는 가장 간단한 코드를 작성한다. 일단 테스트 통과하는 코드를 작성하고 상황에 맞게 리팩토링하는 과정을 거치는 것이다. 말 그대로 테스트가 코드 작성을 주도하는 개발방식인 것이다. Add a test...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/tdd/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Kafka Install",
        "excerpt":"Version OS MacOS Mojave Version 10.14.6 Java $ java -version openjdk version \"1.8.0_222\" OpenJDK Runtime Environment (AdoptOpenJDK)(build 1.8.0_222-b10) OpenJDK 64-Bit Server VM (AdoptOpenJDK)(build 25.222-b10, mixed mode) $ javac -versionw javac 1.8.0_222 Install Kafka $ brew install kafka ==&gt; Installing dependencies for kafka: zookeeper ==&gt; Installing kafka dependency: zookeeper ==&gt; Downloading...","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/kafka-install/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Apache Kafka Introduction",
        "excerpt":"Apache Kafka 아파치 카프카(Apache Kafka)는 아파치 소프트웨어 재단이 스칼라로 개발한 오픈 소스 메시지 브로커 프로젝트이다. 이 프로젝트는 실시간 데이터 피드를 관리하기 위해 통일된, 높은 스루풋의 낮은 레이턴시를 지닌 플랫폼을 제공하는 것이 목표이다. 분산환경에 특화되어 설계되어 있다는 특징을 가짐으로써, 기존의 RabbitMQ와 같은 다른 메세지큐와의 성능 차이가 난다(훨씬 빠르게 처리한다). 그 외에도...","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/kafka-introduction/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Kafka, Zookeeper Server Start Log",
        "excerpt":"Zookeeper Server Start [2019-10-03 00:56:31,984] INFO Reading configuration from: /usr/local/Cellar/kafka/2.3.0/libexec/config/zookeeper.properties (org.apache.zookeeper.server.quorum.QuorumPeerConfig) [2019-10-03 00:56:31,986] INFO autopurge.snapRetainCount set to 3 (org.apache.zookeeper.server.DatadirCleanupManager) [2019-10-03 00:56:31,987] INFO autopurge.purgeInterval set to 0 (org.apache.zookeeper.server.DatadirCleanupManager) [2019-10-03 00:56:31,987] INFO Purge task is not scheduled. (org.apache.zookeeper.server.DatadirCleanupManager) [2019-10-03 00:56:31,987] WARN Either no config or no quorum defined in config, running in...","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/kafka-logs/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "CI / CD",
        "excerpt":"CI (지속적인 통합, Continuous Integration) 지속적으로 퀄리티 컨트롤을 적용하는 프로세스를 실행하는 것이다. - 작은 단위의 작업, 빈번한 적용. 지속적인 통합은 모든 개발을 완료한 뒤에 퀄리티 컨트롤을 적용하는 고전적인 방법을 대체하는 방법으로서 개발자간의 코드 충돌을 방지하고 소프트웨어의 질적 향상과 소프트웨어를 배포하는데 걸리는 시간을 줄이는데 초점이 맞추어져 있다. 대표적인 CI 툴에는 젠킨스(Jenkins)가...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/ci-cd/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "MVC",
        "excerpt":"MVC (Model - View - Controller) 소프트웨어 공학에서 사용되는 소프트웨어 디자인 패턴이다. 이 패턴을 성공적으로 사용하면, 사용자 인터페이스로부터 비즈니스 로직을 분리하여 애플리케이션의 시각적 요소나 그 이면에서 실행되는 비즈니스 로직을 서로 영향 없이 쉽게 고칠 수 있는 애플리케이션을 만들 수 있다. MVC에서 모델은 애플리케이션의 정보(데이터)를 나타내며, 뷰는 텍스트, 체크박스 항목 등과...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/mvc/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Struct",
        "excerpt":"구조체 크기를 구하기전 구조체와 자료형 크기에 대해서 정리를 하고 시작하겠습니다. Struct C/C++ 프로그래밍 언어에서 구조화 된 데이터를 처리할 때 struct를 사용하는데 이를 구조체라고 한다. 구조화되었다는 말은 의미가 연결되어 한 덩어리로 처리하는 방식을 말한다. 관련된 컴퓨터 용어로 보면 record 그리고 Object와 비슷한 개념이다. 그리고 자료처리와 연관하여 데이터 구조와 연관이 되어 있다....","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/structsize/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Spark Introduction",
        "excerpt":"Spark 아파치 스파크(Apache Spark)는 오픈 소스 클러스터 컴퓨팅 프레임워크이다. Spark는 다양한 종류의 데이터 관련 문제, 예를 들어 반구조(semi-structured), 구조, 스트리밍 또는 머신 러닝/데이터 과학 관련 문제를 해결하기 위해 쉽고 빠르게 쓸 수 있는 프레임워크입니다. Spark는 유연성과 맵리듀스에 대한 확장성을 훨씬 빠른 속도로 제공합니다. 데이터가 메모리에 저장돼 있을 때는 Apache Hadoop보다...","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/spark-introduction/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Network Layer",
        "excerpt":"네트워크 계층(Network Layer) 네트워크 계층(영어: network layer)은 컴퓨터 네트워킹의 7계층 OSI 모형 가운데 제3계층이다. 네트워크 계층은 중간 라우터를 통한 라우팅을 포함하여 패킷 포워딩을 담당한다. IP (인터넷 프로토콜, Internet Protocol address) IP 패킷 구조 컴퓨터 네트워크에서 장치들이 서로를 인식하고 통신을 하기 위해서 사용하는 특수한 번호이다. 네트워크에 연결된 장치가 라우터이든 일반 서버이든,...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/network-layer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Transport Layer",
        "excerpt":"전송 계층(Transport Layer) OSI 7 Layer에서 4 계층에 해당됩니다. 계층 구조의 네트워크 구성요소와 프로토콜 내에서 송신자와 수신자를 연결하는 통신 서비스를 제공한다. 전송 계층은 연결 지향 데이터 스트림 지원, 신뢰성, 흐름 제어, 그리고 다중화와 같은 편리한 서비스를 제공한다. 전송 프로토콜 중 가장 잘 알려진 것은 연결 지향 전송 방식을 사용하는 전송...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/transport-layer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Array / Linked List",
        "excerpt":"배열(Array) 배열은 동일한 자료형(Data Type)의 데이터를 연속된 공간에 저장하기 위한 자료구조이다. 즉, 연관된 데이터를 그룹화하여 묶어준다고 생각하면 된다. 연관된 데이터를 저장하기 위한 변수의 선언을 줄여주며, 반복문 등을 이용하여 계산과 같은 과정을 쉽게 처리할 수 있다. 배열을 구성하는 각각의 값을 배열 요소(element)라고 하며, 배열에서의 위치를 가리키는 숫자는 인덱스(index)라고 합니다. C언어에서 인덱스는...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/array-linkedlist/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Stack / Queue",
        "excerpt":"스택 (Stack) 선형 자료구조의 일종으로 Last In First Out (LIFO). push()와 pop() 으로 원소를 넣고 뺄 수 있다. 즉, 나중에 들어간 원소가 먼저 나온다. 이것은 Stack 의 가장 큰 특징이다. 차곡차곡 쌓이는 구조로 먼저 Stack 에 들어가게 된 원소는 맨 바닥에 깔리게 된다. 그렇기 때문에 늦게 들어간 녀석들은 그 위에...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/stack-queue/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Tree / Heap",
        "excerpt":"Tree 트리는 스택이나 큐와 같은 선형 구조가 아닌 비선형 자료구조이다. 트리는 계층적 관계(Hierarchical Relationship)을 표현하는 자료구조이다. 이 트리라는 자료구조는 표현에 집중한다. 무엇인가를 저장하고 꺼내야 한다는 사고에서 벗어나 트리라는 자료구조를 바라보자. 용어 루트 노드(root node) : 부모가 없는 노드. 트리는 하나의 루트 노드만을 가진다. 단말 노드(leaf node) : 자식이 없는 노드이다....","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/tree-heap/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Sorting Algorithm",
        "excerpt":"Sort 전산학과 수학에서 정렬 알고리즘이란 원소들을 번호순이나 사전 순서와 같이 일정한 순서대로 열거하는 알고리즘이다. 효율적인 정렬은 탐색이나 병합 알고리즘처럼 (정렬된 리스트에서 바르게 동작하는) 다른 알고리즘을 최적화하는 데 중요하다. 또 정렬 알고리즘은 데이터의 정규화나 의미있는 결과물을 생성하는 데 흔히 유용하게 쓰인다. 이 알고리즘의 결과는 반드시 다음 두 조건을 만족해야 한다. Bubble...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/sort/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "프로그래밍의 가치",
        "excerpt":"컴퓨터 공학의 매력은 통신, 데이터, 자동화에 있다고 생각한다. 이러한 자동화 기술은 인류를 노동으로부터 해방시키고 있고, 플랫폼을 통해 생태계를 구축하기도 하였다. 그리고 이제는 데이터를 이용해 사회에서 당연히 받아들였던 인문학적 한계를 극복해나가고 있다. 예를 들자면 블록체인을 통해 인증에 있어 제3의 신뢰 보증 기관을 제외하는 DID가 그러하다. 각각의 공학 기술들은 급속한 발전을 이루며...","categories": ["Private"],
        "tags": ["Private"],
        "url": "http://localhost:4000/private/private/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "References",
        "excerpt":"CS https://stackoverflow.com/questions/36243360/the-proper-mvc-pattern https://javaplant.tistory.com/18 https://wildpup.cafe24.com/archives/469 https://hsp1116.tistory.com/45 https://www.isi.edu/nsnam/DIRECTED_RESEARCH/DR_WANIDA/DR/JavisInActionFastRetransmitFrame.html https://blog.naver.com/PostView.nhn?blogId=phj8498&amp;logNo=221348733459 https://kwongyo.tistory.com/23 https://www.cs.usfca.edu/~galles/visualization/RedBlack.html https://gmlwjd9405.github.io/2018/11/05/mvc-architecture.html https://dev.to/emmawedekind/stacks-vs-queues-in-javascript-4d1o https://github.com/SimonWaldherr/GolangSortingVisualization https://www.cloudflare.com/learning/ddos/glossary/user-datagram-protocol-udp/ https://notes.shichao.io/unp/ch2/ https://www.geeksforgeeks.org/ http://blog.daum.net/tlos6733/48 https://sites.google.com/site/projectcodebank/computer-engineering-notes/tcp-congestion-control-algorithm https://book.huihoo.com/data-structures-and-algorithms-with-object-oriented-design-patterns-in-java/html/page514.html https://study-ccna.com/dhcp-dns/ https://www.hackerearth.com/blog/ https://medium.com/quantum-ant/%ED%8A%B8%EB%A6%AC-tree-cec69cfddb14 https://ratsgo.github.io/data%20structure&amp;algorithm/2017/10/27/avltree/ http://staff.ustc.edu.cn/~csli/graduate/algorithms/book6/chap26.htm https://blog.cloudflare.com/ko/http3-the-past-present-and-future-ko/ https://www.saturnsoft.net/network/2019/03/21/quic-http3-1/ https://tools.ietf.org/html/rfc1945 https://www.hostinger.com/tutorials/what-is-ssl-tls-https https://tblogqus.com/top-dhcp-interview-questions-and-answers/ https://aws.amazon.com/ko/route53/what-is-dns/ http://www.cables-solutions.com/pppoe-vs-dhcp-difference.html https://medium.com/sjk5766/%EB%84%8C-%EB%AD%90%EB%8B%88-nginx-9a8cae25e964 https://victorydntmd.tistory.com/231 https://lynux.win/comlin/455 https://www.imperva.com/learn/performance/http-keep-alive/ https://siyoon210.tistory.com/130 http://www.emh.co.kr/content.pl?compiled_interpreted https://ithub.tistory.com/86 https://acodez.in/sql-and-nosql-an-overview/ https://www.guru99.com/difference-compiler-vs-interpreter.html https://asfirstalways.tistory.com/158 https://m.blog.naver.com/PostView.nhn?blogId=jevida&amp;logNo=140199795866&amp;proxyReferer=https%3A%2F%2Fwww.google.com%2F https://jayzzz.tistory.com/44 https://over153cm.tistory.com/entry/%EB%A7%B5%EB%A6%AC%EB%93%80%EC%8A%A4MapReduce%EB%9E%80-1 https://magi82.github.io/process-thread/ https://donghoson.tistory.com/15 https://m.blog.naver.com/rja1104/220551216367 https://www.google.com/search?q=%EA%B5%90%EC%B0%A9%EC%83%81%ED%83%9C&amp;oq=%EA%B5%90%EC%B0%A9%EC%83%81%ED%83%9C&amp;aqs=chrome..69i57j0l5.1028j0j7&amp;sourceid=chrome&amp;ie=UTF-8 https://phaphaya.tistory.com/30 https://ghgus0702.tistory.com/13 https://gmlwjd9405.github.io/2018/05/26/what-is-agile.html...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/references/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Application Layer",
        "excerpt":"응용 계층(Application Layer) 컴퓨터 네트워크 프로그래밍에서 인터넷 프로토콜(IP) 컴퓨터 네트워크를 통하는 프로세스 간 통신 접속을 위해 설계되어 통신 프로토콜과 방식을 위해 보유된 추상 계층이다. 응용 계층 프로토콜은 기반이 되는 전송 계층 프로토콜을 사용하여 호스트 간 연결을 확립한다. OSI 모형에서 이 응용 계층의 정의는 범위가 더 좁다. OSI 모형은 응용 계층을...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/application-layer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Data Link Layer",
        "excerpt":"데이터 링크 계층 (Data Link Layer) 잡음이 있는 인접 노드 간의 물리적인 회선을 상위 망계층(3 layer)이 사용할 수 있도록 전송 에러가 없는 통신 채널로 변환시키는 계층 Parity Bit(패리티 비트) 패리티 비트(Parity bit)는 정보의 전달 과정에서 오류가 생겼는지를 검사하기 위해 추가된 비트이다. 전송하고자 하는 데이터의 각 문자에 1 비트를 더하여 전송하는...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/datalink-layer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "DFS / BFS Algorithm",
        "excerpt":"DFS / BFS 그래프는 정점의 구성 뿐만 아니라 간선의 연결에도 규칙이 존재하지 않기 때문에 탐색이 복잡하다. 따라서 그래프의 모든 정점을 탐색하기 위한 방법은 다음의 두 가지 알고리즘을 기반으로 한다. 깊이 우선 탐색(Depth First Search: DFS) 그래프 상에 존재하는 임의의 한 정점으로부터 연결되어 있는 한 정점으로만 나아간다라는 방법을 우선으로 탐색한다. 일단...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/dfs-bfs/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Dijkstra algorithm",
        "excerpt":"Dijkstra 다익스트라 알고리즘은 도로 교통망 같은 곳에서 나타날 수 있는 그래프에서 꼭짓점 간의 최단 경로를 찾는 알고리즘이다. 이 알고리즘은 컴퓨터 과학자 에츠허르 다익스트라가 1956년에 고안했으며 삼 년 뒤에 발표했다. 다익스트라의 슈도코드는 아래와 같다 pseudo code function Dijkstra(Graph, source): create vertex set Q for each vertex v in Graph: // 초기화...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/dijkstra/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Floyd-Warshall Algorithm",
        "excerpt":"플로이드-워셜 (Floyd-Warshall) 플로이드-워셜 알고리즘은 모든 최단 경로를 구하는 방법이다. 다익스트라 알고리즘은 음의 가중치를 가진 간선은 못쓴다는 제약이 있었다. 하지만 플로이드-워셜에선 사용이 가능하다. 모든 정점에 대한 경로를 계산하므로 거리를 저장할 자료구조는 2차원 배열이 된다. 플로이드-워셜은 optimal substructure의 개념을 이용하여 최단 경로를 찾는다. optimal substructure란 특정 경로 안에 무수히 많은 경로가 있을...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/floyd/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Graph",
        "excerpt":"Graph 단순히 노드(N, node)와 그 노드를 연결하는 간선(E, edge)을 하나로 모아 놓은 자료 구조 Undirected Graph / Directed Graph(Digraph) 말 그대로 정점과 간선의 연결관계에 있어서 방향성이 없는 그래프를 Undirected Graph 라 하고, 간선에 방향성이 포함되어 있는 그래프를 Directed Graph 라고 한다. Directed Graph(Digraph) V = {1, 2, 3, 4, 5,...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/graph/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Kruskal / Prim Algorithm",
        "excerpt":"먼저 kruskal과 prim알고리즘을 알기전에 MST를 알아야 합니다. MST (최소 신장 트리, Minimum Spanning Tree) spanning tree는 모든 정점을 포함하고 , 정점간 서로 연결되면서 사이클이 존재하지 않는 그래프입니다. spanning tree 중 edge weight 의 합이 최소인 spanning tree를 말한다. 여기서 말하는 spanning tree란 그래프 G 의 모든 vertex 가 cycle 이...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/kruskal-prim/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Why Contributing",
        "excerpt":"성장욕은 개인을 이기적으로 만든다 생각했지만, 나와 같은 범재들이 성장하기 위해서는 아이러니하게도 집단에 소속되어 집단을 발전시키는 것이 가장 좋은 방법이다. 나의 첫 팀 개발 프로젝트는 군전역 후 대학교 3학년이었다. 당시 개발자답지 못한 나의 팀 운영 때문에 팀원들은 git을 소개해주며 fork 기능에 담긴 오픈소스 협업 문화를 알려주었다. 배우고 난 뒤 미안함과 감사함에...","categories": ["Private"],
        "tags": ["Private"],
        "url": "http://localhost:4000/private/private/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Application Layer",
        "excerpt":"응용 계층 (Application Layer) 응용 계층(영어: application layer)은 컴퓨터 네트워크 프로그래밍에서 인터넷 프로토콜(IP) 컴퓨터 네트워크를 통하는 프로세스 간 통신 접속을 위해 설계되어 통신 프로토콜과 방식을 위해 보유된 추상 계층이다. 응용 계층 프로토콜은 기반이 되는 전송 계층 프로토콜을 사용하여 호스트 간 연결을 확립한다. OSI 모형에서 이 응용 계층의 정의는 범위가 더...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/application-layer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "OOP_class",
        "excerpt":"가상함수 vs 순수가상함수 가상함수: virtual func() {} 순수가상함수: virtual func() = 0 정적 바인딩 vs 동적 바인딩 정적바인딩: 컴파일시 바인딩 할 주소 결정 동적바인딩: 함수 호출시 결정 가상함수는 동적바인딩 #include &lt;iostream&gt; //#include &lt;bits/stdc++.h&gt; using namespace std; class AHG { public: int value = 0; void func0() { cout &lt;&lt; \"AHG...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/Class/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Critical Region",
        "excerpt":"동기 vs 비동기 vs Blocking vs non-blocking 함수의 결과를 호출한 쪽에서 처리하면 동기 함수의 결과를 호출한쪽에서 처리하지 않으면 비동기 수행 결과가 끝날 때까지 제어권을 갖고 있는 것이 block 제어권을 반납하는것이 non block 임계영역 문제 해결 상호배제(Mutual Exclusion): p1이 임계영역에서 실행중이면 다른 프로세스는 임계영역에서 실행될 수 없음 Progress: 임계영역에서 실행중인 프로세스가...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/Critical_region/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SQL && 관계대수",
        "excerpt":"관계대수 셀렉션, 프로젝션, 카디널리티곱, 세타조인(= &lt;&gt; ≤ ≥ &lt; &gt; 등 모두 포함), 자연조인, 세미조인 디비전 Sql SELECT name, age FROM My_Table WHERE No_Emp = '0315' AND (Age&lt;25 OR Nm_Kor = '홍길동') -- group by error 주의 SELECT a.dname, b.cnt FROM dept a, (SELECT deptno, COUNT(empno) cnt FROM emp GROUP...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Database"],
        "url": "http://localhost:4000/classiccs/DB/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "DB join",
        "excerpt":"DB join Inner Join : 2개 이상의 테이블에서 교집합만을 추출(세타조인, 자연조인 등 모두를 지칭?) Left Join : 2개 이상의 테이블에서 from에 해당하는 부분을 추출 Right Join : 2개 이상의 테이블에서 from과 join하는 테이블에 해당하는 부분을 추출 Outer Join : 아웃터 조인 또는 풀 조인이라고 불림, 2개 이상의 테이블에서 모든 테이블에 해당하는 부분을 추출 Inner)...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Database"],
        "url": "http://localhost:4000/classiccs/DB_join/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "DB_정규화",
        "excerpt":"데이터베이스 정규화 제 1 정규화 ⇒ 모든 도메인이 원자값 제 2 정규화 ⇒ 제1 정규형이면서, 모든 컬럼이 완전 함수 종속 제 3 정규화 ⇒ 제2 정규형이면서, 기본키가 아닌 모든 속성이 기본키에 이행적 함수 종속이 안된 상태 X, Y, Z 에 대해 X-&gt;Y 이고 Y-&gt;Z 이면 X-&gt;Z 가 성립한다. 이를 Z...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Database"],
        "url": "http://localhost:4000/classiccs/DB_normalization/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "about git flow & MVC",
        "excerpt":"git flow vs github flow vs gitlab flow git flow: master, hotfixes, release, develop, feature hotfixes → master, develop develop → release → master github flow master &amp; feature(develop), push 자주 gitlab flow github flow + production CI / CD CI: 충돌관리 &amp; 빌드 및 머지 CD: 배포 MVC Controller가...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/Flow/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Graph - DataStructure",
        "excerpt":"그래프 인접행렬 vs 인접리스트 최단경로 크루스칼 가장 짧은 간선을 계속 연결 사이클이 생기면 연결 안함 // 같은 사이클인지는 union-find를 이용함 찾는 그림 // 다음은 union-find의 기본 개념 프림 연결한 점에서 가장 가까운 점을 계속 연결 // 연결 한 점부터 다시 시작, 그 전까지 누적을 비교하는 것이 아님 이미 갔으면 연결...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","DataStructure"],
        "url": "http://localhost:4000/classiccs/Graph/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "OOP",
        "excerpt":"객체지향 현실세계의 사물들을 객체로 보고 그 객체로부터 개발하고자 하는 애플리케이션에 필요한 특징들을 뽑아와 프로그래밍 하는 것 객체 vs Object vs Class vs instance 설계원칙 (SOLID) SRP 단일책임의 원칙 한 클래스는 하나의 책임만 가져야한다. OCP 개방폐쇄의 원칙 소프트웨어 엔티티는 확장에는 열려있으나 변경에는 닫혀있어야한다. LSP 리스코프 치환 법칙 프로그램의 객체는 프로그램의 정확성을...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/OOP/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "OSI 7 layer",
        "excerpt":"OSI 7계층 물리: 두 장치간의 실제 접속과 관련된 물리적인 특성 전송단위: 비트 / 장비: UTP 케이블, 동축 케이블, 허브 등 - 데이터링크: 물리적으로 연결되어있는 호스트끼리의 통신 송수신 확인, 오류제어, 흐름제어 전송단위: 프레임 / 장비: 브릿지, 스위치 / 프로토콜: 이더넷 - 네트워크: 데이터가 원하는 목적지까지 성공적으로 전달되도록 하는 역할 논리적 주소체계,...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Network"],
        "url": "http://localhost:4000/classiccs/OSI/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "About memory - OS",
        "excerpt":"내부단편화 외부단편화 내부단편화: 메모리를 할당하는 블록의 크기보다 작은 공간을 차지하는 프로세스가 들어갔을때 남는 상황 외부단편화: 메모리에 빈 공간이 연속적이지 않아 프로세스를 할당하지 못하는 상황 가상메모리 실행중인 프로세스가 가상의 공간(보조기억장치)를 활용하여 커다란 물리 메모리(메인메모리)를 가지고 있는것처럼 사용 메모리풀, 페이징, 세그멘테이션 ⇒ 가상메모리를 관리하는 기법 페이징 물리메모리를 프레임으로, 논리 메모리의 프로세스들을 페이지로...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/OSmemory/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Restful API",
        "excerpt":"RESTful API 자원을 정의하고 자원에 대한 주소를 지정하는 방법 전반에 대한 패턴 REST의 원칙 Client-server architecture: 클라이언트와 서버 분리해야함 Statelessness: 상태를 가지고 있으면 안됨 (인터페이스 처럼 동작, 주고 받고 고치고) Cacheability : WWW처럼 캐싱할수 있음. Status code 304 Layered System: 클라이언트와 서버사이에 로드밸런서처럼 다른 계층이 있을 수 있음 (클라이언트는 알...","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/Restful/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "process scheduling",
        "excerpt":"프로세스 스케줄러 Job Queue: 모든 프로세스 Ready Queue: 현재 메모리에 있고 CPU를 잡아서 실행되기를 기다리는 프로세스의 집합 Device Queue: Device I/O 작업을 대기하고 있는 프로세스의 집합 각각의 프로세스 스케줄러에 프로세스를 넣고 빼주는 스케줄러 장기 스케줄러 메모리와 디스크 사이 new → ready 단기 스케줄러 CPU와 메모리 사이 ready → running →...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/Scheduling/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "TCP/IP - socket 통신",
        "excerpt":"TCP https://recipes4dev.tistory.com/153 4 hand: https://asfirstalways.tistory.com/356 Flow Control(흐름제어) 수신측이 송신측 보다 빠르면 상관 없지만, 송신측이 빠르다면 문제 발생 수신측에서 제한된 저장용량을 초과하는 경우 데이터 손실 발생 Stop and Wait 매번 전송한 패킷에 대해 확인 응답을 받아야만 다음 패킷 전송 Sliding Window 수신측에서 설정한 윈도우 크기만큼 송신측에서 보내도 됨 Congestion Control(혼잡제어) 한...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/Socket/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Sorting",
        "excerpt":"        힙              뺄때는 루트 빼고, 마지막노드를 루트로 치환. 삽입과정 되풀이       스택 두개로 큐 구현: a스택은 넣기만, b스택은 빼기만. 뺄게 없으면 a거를 다 뽑아 넣음            정렬       Bubble              Insertion              Selection                     quick                  왜 c++ std 에서 sort는 heap이 아니라 quick일까?        글 제목: Sorting 수정 시간: 2019-08-23 22:00:00 +0000      ","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/Sorting/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "structure",
        "excerpt":"구조체 크기 (4바이트 정렬) 4 미만은 4로 침, 4 이상의 자료형이 있다면 자료형의 배수 만큼의 크기를 만듦 각 자료형의 배수자리에 들어감. //packed하면 사이사이에 들어감 struct A { char a; int b; char c; double d; } __attribute__((aligned(4))); // sizeof(A) = 24 struct A { char a; int b; char c;...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/Structure/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Tree - Data structure",
        "excerpt":"트리 이진트리, 포화 이진 트리, 완전 이진트리, 균형트리 포화: 완전 꽉찬거, 완전: 왼쪽부터 찬거, 균형트리: 모든 단말노드의 레벨 차이가 많아야 1 깊이: 루트에서 어떤 노드까지 경로의 길이(root가 0부터 시작) 높이: 가장 먼 리프로부터의 길이(tree의 높이는 가장 큰 깊이와 동일) 레벨: 1부터 시작 Redblack, b+, b*, b-, heap, avl tree 어떤...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","DataStructure"],
        "url": "http://localhost:4000/classiccs/TREE/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "URL vs URI vs URN",
        "excerpt":"   URI vs URL vs URN      URI: Identifier   인터넷에 있는 자원을 나타내는 유일한 주소 (문현균)      URL:  Locators   자원이 어디 있는지를 알려주기 위한 규약 (집주소)      URN: Uniform Resource Name   (영구적, 위치와 독립적 주민등록번호)      글 제목: URL vs URI vs URN 수정 시간: 2019-08-23 22:00:00 +0000  ","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/URI_URL/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Browser",
        "excerpt":"주소창에 www.naver.com을 치고 초록창을 보기까지의 과정 설명 크롬의 틀 ⇒ ui, 네트워크를 통해 가져온 것을 그리는거(html의 내용) ⇒ renderer https://d2.naver.com/helloworld/5237120 기본적으로 멀티 프로세스로 동작 브라우저 프로세스 내의 UI thread가 검색어인지 url인지 판단 검색어면 검색 엔진의 URL과 조합해 새로운 URL 형태 UI 스레드가 네트워크 호출을 시작한다. 로딩 스피너가 탭의 모서리에 표시되고,...","categories": ["ModernCS"],
        "tags": ["Browser"],
        "url": "http://localhost:4000/moderncs/broswer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "class 4대 특징",
        "excerpt":"4대 특징 상속 상위 개념의 특징을 하위 개념이 물려받은것 자바에서 final이라고 하면 상속 불가 is a(상속 / 경찰은 사람이다), has a(객체 합성 / 경찰은 총을 가지고 있다) , is a kind of 다형성 프로그램 언어의 각 요소들(함수, 변수 등)이 다양한 자료형에 속하는 것이 허가되는 성 Int i; Date d; i.toString();...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/class_4/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "code vs data vs bss",
        "excerpt":"        변수들이 메모리에 저장되는 영역       ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ              Code 영역 : 함수, 제어문, 상수 등등 함수에 대한 기계어 코드가 들어감       Data 영역 : 초기값 있는 전역변수, 배열, static으로 선언된 변수가 들어감       Bss 영역 : 초기값 없는 전역변수, 배열, static으로 선언된 변수가 들어감       Compile time에 크기가 결정되고 이후로 변동되지 않는다.           ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ              Heap 영역 : 동적할당(malloc)으로 할당된 변수가 들어감. 프로그래머 영역.       Stack 영역 : 지역변수, 블록내에서 할당된 변수가 들어감. 블록을 벗어나면 사라짐       Run time에 Bss와 Heap사이를 기준으로 해서 Heap은 아래로 순차적으로 메모리를 사용하고 Stack은 위쪽으로 순차적으로 메모리를 사용한다           ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ            const 용법       https://codemuri.tistory.com/424            클래스 vs 구조체       C++에서는 접근제어자가 기본 private vs public 인거 말고는 차이가 없음       구조체도 new 가 되는가?       글 제목: code vs data vs bss 수정 시간: 2019-08-23 22:00:00 +0000  ","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/data_locate/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Dangling vs Smart pointer",
        "excerpt":"댕글링포인터, 스마트포인터 댕글링 포인터: 해제된 메모리를 가리키는 포인터, free후 null을 해주어야함 스마트 포인터: 댕글링 포인터를 방지하기 위해 사용되는 타입 자원을 획득한후, 자원 관리 객체에게 넘긴다 자원관리 객체는 자신의 소멸자를 사용하여 자원이 확실하게 해제 되도록 한다 버그 보완(안전), 자동청소, 자동 초기화를 해준다 스마트 포인터는 C++에서 안전하고 효율적인 코드를 작성하는데 유용하다 delete를...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/pointer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "process vs thread",
        "excerpt":"프로그램 vs 프로세스 vs 스레드 https://github.com/JaeYeopHan/Interview_Question_for_Beginner/tree/master/OS 프로그램: 파일 (.exe) 프로세스: 실행 중인 프로그램으로 메모리에 적재되어 CPU의 할당을 받을 수 있는 것 PCB: 프로세스의 진행사항등의 정보(PID, state program counter(다음에 실행할 명령어 주소)등) 저장 스레드: 프로세스가 할당받은 자원을 이용하는 실행단위 프로세스 내의 자원 공유 스레드는 프로세스 내에서 Stack만 할당받고 code, data, heap은...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/process/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "TCP/IP",
        "excerpt":"TCP/IP LINK: 물리적인 영역의 표준화에 대한 결과, LAN/WAN/MAN IP: 경로 검색, 신뢰할 수 없는 프로토콜 TCP/UDP: 실제 송수신 담당 APPLICATION: 서버와 클라이언트 성격에 따라 데이터 송수신에 대한 약속 네트워크 주소: 시작주소(192.168.1.0) 브로드캐스트 주소: 마지막 주소(192.168.1.255 ⇒ 서브네팅하면 255가 아닐 수도 있음.) host ip는 위 두 개를 쓸 수 없다 routing...","categories": ["ClassicCS"],
        "tags": ["ClassicCS","Network"],
        "url": "http://localhost:4000/classiccs/tcp/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Meetup Korea",
        "excerpt":"이 포스트는 Hyperledger Korea User Group에서 만든 글을 바탕으로 만들었습니다. Settings Hyperledger Indy - Getting Started 환경 구성하기 Version $ vagrant -v Vagrant 2.2.5 VirtualBox 버전 6.0.10 r132072 (Qt5.6.3) 본 포스트에서는 Hyperledger Indy SDK 1.11.x 의 Getting Started 설치를 대상으로 설명합니다. 아래는 1Core, 2G 메모리 VM 한개를 생성하는 샘플 Vagrantfile입니다.(Hyperledger...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/hlmeetup0/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "transaction",
        "excerpt":"트랜잭션 ACID // Rollback, Commit Atomicity (원자성): 실행 되거나 vs 안되거나 Consistency (일관성): 트랜잭션이 성공적으로 완료되면 일관적인 DB 상태 유지 (컬럼이 int에서 string으로 바뀐다거나 키가 널이라거나 하면 안됨) Isolation (고립성): 각각의 트랜잭션끼리 간섭없이 Durability (지속성): 트랜잭션이 정상적으로 종료되면 영구적으로 결과 저장 트랜잭션 UNCOMMIT된 것도 읽음 비긴이 되기 전 값만을 계속...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/transaction/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Network 구성 (BYFN)",
        "excerpt":"Network 구성 크게 2가지로 나눠서 해보겠습니다. 첫 번째로는 Hyperledger 에서 제공하는 byfn.sh 파일을 이용하여 간단하고 빠르게 네트워크를 구성하는 방법을 이용할것입니다. 두 번째로는 hyperledger 에서 제공하는 binary 파일들을 이용하여 천천히 하나하나 명령어를 설명하면서 진행하겠습니다. 현 포스트는 첫 번째 방법을 이용하여 네트워크를 구성해보겠습니다. Version Vagrant 2.2.5 Ubuntu 16.04.6 LTS Hyperledger Fabric 1.4.x...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/fabricnetwork1/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Apache vs Nginx",
        "excerpt":"Apache Apache 서버는 요청 하나 당 프로세스(또는 쓰레드)가 처리하는 구조입니다. 즉 요청이 많을수록 CPU와 메모리 사용이 증가하기 때문에 성능 저하가 있을 수 있습니다. 또한 Apache 서버의 프로세스가 블록킹( blocking )이 되면 요청을 처리하지 못하고, 처리가 완료 될 때까지 계속 대기하는 일이 발생합니다. 동시 접속 요청이 10,000 개라면 그 만큼 Process...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/apache-nginx/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SQL vs NoSQL",
        "excerpt":"SQL(관계형 데이터베이스) SQL은 ‘구조화 된 쿼리 언어 (Structured Query Language)’의 약자입니다. 그러므로 데이터베이스 자체를 나타내는 것이 아니라, 특정 유형의 데이터베이스와 상호 작용하는 데 사용 하는 쿼리 언어입니다. (그러나 이 글에서는 SQL을 ‘관계형 데이터베이스’ 라는 의미로도 사용합니다.) SQL을 사용하면 관계형 데이터베이스 관리 시스템(RDBMS)에서 데이터를 저장, 수정, 삭제 및 검색 할 수...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/sql-nosql/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Network 로그",
        "excerpt":"docker-compose -f docker-compose-cli.yaml up peer1.org2.example.com | 2019-10-22 15:06:14.780 UTC [nodeCmd] serve -&gt; INFO 001 Starting peer: peer1.org2.example.com | Version: 1.4.3 peer1.org2.example.com | Commit SHA: b8c4a6a peer1.org2.example.com | Go version: go1.11.5 peer1.org2.example.com | OS/Arch: linux/amd64 peer1.org2.example.com | Chaincode: peer1.org2.example.com | Base Image Version: 0.4.15 peer1.org2.example.com | Base Docker Namespace: hyperledger peer1.org2.example.com...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/fabricnetwork2-log/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Network 구성 (BYFN)",
        "excerpt":"Network 구성 크게 2가지로 나눠서 해보겠습니다. 첫 번째로는 Hyperledger 에서 제공하는 byfn.sh 파일을 이용하여 간단하고 빠르게 네트워크를 구성하는 방법을 이용할것입니다. 두 번째로는 hyperledger 에서 제공하는 binary 파일들을 이용하여 천천히 하나하나 명령어를 설명하면서 진행하겠습니다. 현 포스트는 두 번째 방법을 이용하여 네트워크를 구성해보겠습니다. Settings Setting 부분은 Hyperledger Fabric Network 구성 -1- 부분과...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/fabricnetwork2/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Network 로그",
        "excerpt":"docker-compose -f docker-compose-kafka.yaml up Orderer 2019-10-22 17:11:34.859 UTC [localconfig] completeInitialization -&gt; INFO 001 Kafka.Version unset, setting to 0.10.2.0 2019-10-22 17:11:34.928 UTC [orderer.common.server] prettyPrintStruct -&gt; INFO 002 Orderer config values: General.LedgerType = \"file\" General.ListenAddress = \"0.0.0.0\" General.ListenPort = 7050 General.TLS.Enabled = true General.TLS.PrivateKey = \"/var/hyperledger/orderer/tls/server.key\" General.TLS.Certificate = \"/var/hyperledger/orderer/tls/server.crt\" General.TLS.RootCAs = [/var/hyperledger/orderer/tls/ca.crt]...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/fabricnetwork3-log/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Network 구성 (BYFN)",
        "excerpt":"기존 포스트 까지는 orderer의 타입을 solo로 놓고 진행했습니다. 이번 포스트에서는 kafka를 이용해서 만들어 보겠습니다. fabric-samples에서 제공하는 kafka 모드는 zookeeper 1개 kafka 1개로 이루어져 있습니다. 이 예제로 사용해도 되지만 그러면 zookeeper들간의 Leader Election 같은 중요한 부분을 놓칠 수 있으니 zookeeper 3개 kafka 4개로 만들어서 진행해보겠습니다. 아 그리고 이 방법은 VM 3개로...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/fabricnetwork3/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Network 로그",
        "excerpt":"Orderer.example.com 2019-10-22 20:22:07.157 UTC [localconfig] completeInitialization -&gt; INFO 001 Kafka.Version unset, setting to 0.10.2.0 2019-10-22 20:22:07.166 UTC [orderer.common.server] prettyPrintStruct -&gt; INFO 002 Orderer config values: General.LedgerType = \"file\" General.ListenAddress = \"0.0.0.0\" General.ListenPort = 7050 General.TLS.Enabled = true General.TLS.PrivateKey = \"/var/hyperledger/orderer/tls/server.key\" General.TLS.Certificate = \"/var/hyperledger/orderer/tls/server.crt\" General.TLS.RootCAs = [/var/hyperledger/orderer/tls/ca.crt] General.TLS.ClientAuthRequired = false General.TLS.ClientRootCAs...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/fabricnetwork4-log/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Network 구성 (BYFN)",
        "excerpt":"기존 포스트 까지는 orderer의 타입을 solo로와 kafka 놓고 진행했습니다. 이번 포스트에서는 raft를 이용해서 만들어 보겠습니다. fabric-samples에서 제공하는 RAFT 모드는 orderer 5개로 이루어져 있습니다. 그래서 서로 Settings Setting 부분은 Hyperledger Fabric Network 구성 -1- 부분과 동일하니 똑같이 진행하시면 됩니다. HandOn 부분부터 다릅니다. HandsOn 여기서 부터는 byfn.sh 내부를 들어가서 하나하나 명령어를 치면서...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/fabricnetwork4/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Public 블록체인 vs Private 블록체인",
        "excerpt":"Public BlockChain 퍼블릭 블록체인(public blockchain)은 권위있는 조직의 승인 없이 누구든지 인터넷에 연결된 PC, 노트북, 스마트폰, 서버, 컴퓨터 채굴기 등 다양한 컴퓨터 장비를 이용하여 블록체인 네트워크에 참여가 가능합니다. 즉 공공 블록체인 또는 개방형 블록체인이라고 합니다. 이는 운영과 참여의 주체가 불분명하기 떄문에 인센티브 제도인 코인(Token)을 발행하여 운영됩니다. 대표적인 블록체인 : Bitcoin, Ethereum...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/public-private/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "C vs Java vs Python",
        "excerpt":"컴파일러 언어 vs 인터프리터 언어 컴파일러 언어 컴파일러 언어는 작성한 코드를 기계어로 번역을 해놓기 때문에 실행 속도가 빠르고 보안성이 높습니다. 이러한 프로그램을 목적프로그램이라고도 하고, 컴퓨터 하드웨어(cpu)가 알아 들을 수 있는 기계어로 번역되었다는 의미에서 바이너리 파일이라고도 합니다. 하지만, 코드 수정을 조금이라도 한다면, 모든 부분을 다시 컴파일을 해야 하기 때문에 개발 기간이...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/cjavapython/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "DataBase",
        "excerpt":"SQL(Structed Query Language) SQL은 구조적인 질의 언어라고 하며, 이 SQL이라는 질의 언어를 통해서 데이터베이스를 제어 관리한다. SQL은 다음 언어로 나눌 수 있다. DDL, DML DCL DDL (Data Definition Language) 데이터 베이스 스키마를 정의하거나 조작하기위해 사용한다. CREATE, ALTER, DROP, TRUCATE DML (Data Manipulation Language) 데이터를 조작하기 위해 사용한다. 사용자가 응용 프로그램과...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/database/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Kernel",
        "excerpt":"커널 커널(kernel)은 컴퓨터의 운영 체제의 핵심이 되는 컴퓨터 프로그램의 하나로, 시스템의 모든 것을 완전히 통제한다. 운영체제의 다른 부분과 응용 프로그램이 요구하는 기본 서비스를 모두 제공하고, 시스템을 구성하는 중요한 자원들(메모리, 파일, 주변 장치)을 관리합니다. 커널은 프로그램의 수행상태인 프로세스 간의 보안 접근을 책임지는 소프트웨어입니다. 커널이 이러한 프로세스마다 얼마만큼의 자원을 사용해야 하는지 결정해야하는데...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/kernel/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "MapReduce",
        "excerpt":"MapReduce 대용량 데이터 처리를 위한 분산 프로그래밍 모델이다. 맵리듀스는 맵(Map) 단계와 리듀스(Reduce) 단계로 처리 과정을 나누어 작업한다. 각 단계는 입력과 출력으로써 키-값 쌍을 가지고 있고, 그 타입은 프로그래머가 선택합니다. 또한, 맵과 리듀스 함수도 프로그래머가 직접 작성하게 됩니다 Map은 흩어져 잇는 데이터를 Key, Value의 형태로 연관성 있는 데이터 분류로 묶는 작업...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/mapreduce/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Process / Thread",
        "excerpt":"프로세스 vs 스레드 프로그램 어떤 작업을 위해 실행할 수 있는 파일. 프로세스 프로세스는 컴퓨터에서 연속적으로 실행되고 있는 컴퓨터 프로그램이다. 프로세스는 메모리에 올라와 실행되고 있는 프로그램의 인스턴스(독립적인 개체) 이며, CPU 의 할당을 받을 수 있는 것을 말한다. 운영체제로부터 주소 공간, 파일, 메모리 등을 할당받으며 이것들을 총칭하여 프로세스라고 한다. 구체적으로 살펴보면 프로세스는...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/process-thread/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "BlockChain Consensus Algorithm",
        "excerpt":"PoW (작업증명, Proof of Work) 작업증명은 Bitcoin이 도입한 합의 프로토콜입니다. 이 프로세스를 ‘마이닝’이라고 하며 네트워크의 노드를 ‘광부’라고 합니다. “작업 증명”은 도착하기 위해 상당한 노력이 필요한 수학적 문제에 대한 답을 해결하는 과정입니다. 또한 비트코인은 가장 긴 체인(Longest Chain)을 선택하는 방법을 사용합니다. 즉, 풀기 어려운 문제를 빨리 해결한 사람에게 블록을 생성할 수...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/consensus-algorithm/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "DevOps Introduction",
        "excerpt":"기존 개발 시스템 일반적인 개발 운영 체계는 다음과 같다. 개발팀에 의해서 개발이 끝나면, 시스템은 테스트를 거쳐서 운영팀에 이관되고, 운영팀은 해당 시스템을 배포 및 관리 운영한다. 일단 이관된 시스템은, 개발팀이 일체 관여하지 않고, 운영팀에 의해서 현상 유지 된다. 이때 여러가지 문제가 발생하는데 대표로 아래와 같습니다. 문제가 발생시 서로 책임을 미루게되어 문제...","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/devops-introduction/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hadoop Introduction",
        "excerpt":"HDFS (Hadoop Distributed FileSystem) HDFS는 데이터를 저장하면, 다수의 노드에 복제 데이터도 함께 저장해서 데이터 유실을 방지 HDFS에 파일을 저장하거나, 저장된 파일을 조회하려면 스트리밍 방식으로 데이터에 접근해야 함. 한번 저장한 데이터는 수정할 수 없고, 읽기만 가능하게 해서 데이터 무결성을 유지. 데이터 수정은 불가능 하지만 파일이동, 삭제, 복사할 수 있는 인터페이스를 제공함....","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/hadoop-introduction/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Zookeeper Introduction",
        "excerpt":"Zookeeper 분산 시스템을 설계 하다보면, 가장 문제점 중의 하나가 분산된 시스템간의 정보를 어떻게 공유할것이고, 클러스터에 있는 서버들의 상태를 체크할 필요가 있으며 또한, 분산된 서버들간에 동기화를 위한 락(lock)을 처리하는 것들이 문제로 부딪히게 되는데 이러한 문제를 해결하는 시스템을 코디네이션 서비스 시스템 (coordination service)라고 하는데, Apache Zookeeper가 대표적이다. 주키퍼는(Zookeeper)는 분산 코디네이션 서비스를 제공하는...","categories": ["ModernCS"],
        "tags": ["ModernCS"],
        "url": "http://localhost:4000/moderncs/zookeeper-introduction/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Caliper Getting Started",
        "excerpt":"Settings Vagrant 파일 조작이랑 명령어는 Hyperledger Fabric Network 구성 -1- 부분과 동일하니 똑같이 진행하시면 됩니다. Caliper에서는 아래 파일을 사용하겠습니다. 위 포스트와는 다르게 코어와 메모리를 늘렸습니다. Vagrantfile ENV[\"LC_ALL\"] = \"en_US.UTF-8\" Vagrant.configure(\"2\") do |config| vm_num = 1 node_cpu = 2 # 2Core node_memory = \"4096\" # 4G Memory node_network = \"10.30.30\" node_prefix...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/caliper-gettingstarted/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "SQL JOIN",
        "excerpt":"INNER JOIN INNER 조인은 MySQL에서는 간략히 JOIN으로 나타낸다. 일반적으로 사용하는 JOIN 이다. 핵심은 JOIN뒤에 ON인데, 두 테이블이 결합하는 조건을 나타낸다. 두 테이블이 결합하는 조건을 나타낸다 LEFT / RIGHT OUTER JOIN LEFT OUTER JOIN 왼쪽 테이블이 기준이 되어서 그 테이블에 있는 데이터를 모두 가져온다. 기준으로 지정되지 않은 오른쪽 테이블에서 가져올 수...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/sql-join/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Hyperledger Fabric CA / MSP",
        "excerpt":"CA(Certificate Authority) 인증 기관이라는 의미이다. 즉 내가 누구인지 혹은 이 웹싸이트가 누구인지 인증해 주는 기능을 하는 것을 말한다. Hyperledger Fabric - CA 하이퍼레즈 패브릭에서 CA(인증 기관)는 사용자 등록, 블록체인에서 호출된 트랜잭션 및 블록체인의 사용자 또는 구성요소 간의 TLS 보안 연결과 관련이 있다. Hyperledger Fabric - CA Network 먼저 CA 와...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/ca-msp/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Gossip Protocol",
        "excerpt":"Gossip Protocol 하이퍼래저 패브릭에서는 트랜잭션 실행 피어와 트랜잭션 정렬 피어사이에서 업무를 분담해서 CPU부하(고루틴을 통함) 및 네트웍 부하를 처리한다. 이런 분리된 네트워크에서 확장성,보안성등에 대한 처리를 유연하게 하기 위해 패브릭은 가쉽 데이터 전파 프로토콜 을 만들었다. 각 가십메세지들은 서명되어서 전달되며, 그에 따라 중간에 악의적인 노드의 메세지도 쉽게 확인되며, 가쉽 프로토콜 특성상 늦게...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/gossip-protocol/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Nonce",
        "excerpt":"Hyperledger Fabric Nonce Hyperledger fabric 에서 reply attact 을 막기위한 nonce는 랜덤으로 생성되는데, 해당 nonce 를 가지고 TXID 도 만듭니다. 따라서 nonce 는 트랜잭션마다 가지고 있게 되며, Ledger에 그대로 저장되어 - nonce를 검증하기 위해서는 해당 트랜잭션에 대해 Ledger에 이미 동일한 TxID를 가진 트랜잭션이 있는지에 대한 중복 검사를 통해 검증됩니다. 패브릭엔...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/nonce/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Peer",
        "excerpt":"Anchor Peer Anchor Peer 는 조직 간의 피어들에 대한 정보 교환의 대리인으로 사용된다. 이로써 서로에 대한 위치를 알게 되어 Peer 하나에서 체인코드를 시작하면 모두에 적용될 수 있게 되며 MSP에 대한 공유도 가능해진다.적어도 하나의 앵키피어가 채널 설정시 정의되야하며, 채널에 참여하는 피어들은 제네시스 블록안에 기록된 앵커피어에 대한 정보를 공유하게 된다. Ledaing Peer...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/peer/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Token vs Coin",
        "excerpt":"Token 과 Coin의 차이 토큰과 코인의 결정적인 차이를 한마디로 정의하자면 바로 메인넷 입니다. 메인넷은 독립적인 블록체인 생태계를 구성하는 것을 말하고 이러한 메인넷을 가지고 있는 암호화폐를 코인 이라 부르며 암호화폐 거래가 이루어질 수 있도록 지갑 및 기타 클라이언트 프로그램이 개발되어 자체적인 생태계를 지니고 있습니다. 반면에, 토큰은 기존 플렛폼에서 파생되어 만들어진 암호화폐를...","categories": ["ModernCS"],
        "tags": ["ModernCS","Blockchain"],
        "url": "http://localhost:4000/moderncs/token-coin/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "메모리 관리",
        "excerpt":"메모리 관리 배경 각각의 프로세스 는 독립된 메모리 공간을 갖고, 운영체제 혹은 다른 프로세스의 메모리 공간에 접근할 수 없는 제한이 걸려있다. 단지, 운영체제 만이 운영체제 메모리 영역과 사용자 메모리 영역의 접근에 제약을 받지 않는다. Swapping : 메모리의 관리를 위해 사용되는 기법. 표준 Swapping 방식으로는 round-robin 과 같은 스케줄링의 다중 프로그래밍...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/memory-manage/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Process Scheduling",
        "excerpt":"프로세스 스케쥴링(Process Scheduling) CPU를 사용하려고 하는 프로세스들 사이의 우선 순위를 관리하는 일이다. 스케줄링은 처리율과 CPU 이용률을 증가시키고 오버헤드/응답시간/반환시간/대기시간 최소하 시키는 기법이다. 선점 &amp; 비선점 스케줄링 스케줄링은 적용시점에 따라 비선점형과 선점형으로 나눌 수 있다. 선점형 스케줄링(Preemptive Scheduling) CPU가 어떤 프로세스에 의해 점유 중일 때, 우선 순위가 높은 프로세스가 CPU를 차지할 수...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/process-scheduling/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Virtual Memory",
        "excerpt":"가상 메모리 다중 프로그래밍을 실현하기 위해서는 많은 프로세스들을 동시에 메모리에 올려두어야 한다. 가상메모리는 프로세스 전체가 메모리 내에 올라오지 않더라도 실행이 가능하도록 하는 기법이며, 프로그램이 물리 메모리보다 커도 된다는 주요 장점이 있다. 가상 메모리 개발 배경 실행되는 코드의 전부를 물리 메모리에 존재시켜야 했고, 메모리 용량보다 큰 프로그램은 실행시킬 수 없었다. 또한,...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/virtual-memory/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Npz",
        "excerpt":"title: “npz - how to unzip npz file from binary” excerpt: “Development” categories: Development tags: Development last_modified_at: 2019-08-23T22:00:00 — CASE : npz of lot of npz &amp;&amp; download by torrent frombuffer saved as binaryIO reading binary of npz file 3-1. np.load process 3-2. check about magic number and crc 3-3....","categories": [],
        "tags": [],
        "url": "http://localhost:4000/npz/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Wget",
        "excerpt":"title: “wget - how stable” excerpt: “Development”   categories:     Development tags:   Development last_modified_at: 2019-08-23T22:00:00 —   글 제목: Wget 수정 시간:  ","categories": [],
        "tags": [],
        "url": "http://localhost:4000/wget/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Little Endian vs Big Endian",
        "excerpt":"엔디언(Endianness) 엔디언은 컴퓨터 메모리와 같이 1차원 공간에 여러 개의 연속된 대상을 배열하는 방법을 뜻하며, 바이트를 배열하는 방법 특히 바이트 순서라한다. 우선 리틀 엔디안은 주로 인텔 게열의 CPU에서 이용하는 바이트 오더링 방식으로, 가장 낮은 바이트부터 정렬하는 방식이고, 빅 엔디안은 주로 AMD계열의 CPU에서 이용하는 방식으로, 가장 높은 바이트부터 정렬하며, 사람이 읽기 좋은...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/endian/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Cache",
        "excerpt":"Caches 캐시는 CPU 칩 안에 들어가는 작고 빠른 메모리다. (그리고 비싸다.) 프로세서가 매번 메인 메모리에 접근해 데이터를 받아오면 시간이 오래 걸리기 때문에 캐시에 자주 사용하는 데이터를 담아두고, 해당 데이터가 필요할 때 프로세서가 메인 메모리 대신 캐시에 접근하도록해 처리 속도를 높인다. CPU 칩에는 여러 개의 캐시가 들어가며, 각각의 캐시는 각자의 목적과...","categories": ["ClassicCS"],
        "tags": ["ClassicCS"],
        "url": "http://localhost:4000/classiccs/cash/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "docker vs k8s",
        "excerpt":"컨테이너와 오케스트레이션이란? 컨테이너는 하드웨어의 복제본을 필요하지 않게 함으로써 가상머신과 같이 특정 환경을 몇 초만에 구성하고 정지시켜준다. 컨테이너가 위와 같은 장점이 있고, 소규모 컨테이너를 실험해보고 싶다면 도커 만으로도 충분하다. 하지만 정식 서비스를 운영하기 위해 데이터베이스, 웹 프론트엔드, 미들웨어, 백엔드 등 여러 컨테이너로 하나의 애플리케이션을 구성하는 경우는 어떠할까? 하나의 앱을 구성하는 것도...","categories": ["ModernCS"],
        "tags": ["Cloud","Docker","Kubernetes"],
        "url": "http://localhost:4000/moderncs/docker-k8s/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "Super vs Cloud vs Grid",
        "excerpt":"슈퍼 컴퓨터란? 전용 OS를 사용하여 모든 컴퓨터 리소스를 하나로 묶어 작업을 처리한다. 내부를 보면 여러 컴퓨터 리소스가 병렬로 연결되어 있지만, 인피니 밴드 등으로 각각을 연결해 네트워크를 통한 병렬처리와는 속도의 차이가 많이 난다. 그리드 컴퓨팅이란? 분산 컴퓨팅 모델. 하나의 작업을 각각의 OS가 설치된 여러 컴퓨팅 자원이 네트워크로 통신하며 작업을 처리하는 것으로,...","categories": ["ModernCS"],
        "tags": ["Cloud","GridComputer","SuperComputer"],
        "url": "http://localhost:4000/moderncs/super-cloud/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"},{
        "title": "VM vs Container",
        "excerpt":"VM - 가상머신이란? 가상의 하드웨어를 만들어 낸 뒤 OS를 설치하여 연동하므로, 하드웨어 복사본 및 운영체제 복사본을 가진다. 많은 RAM과 CPU 싸이클을 소모한다. 컨테이너란? OS와 보조 프로그램, 라이브러리, 적은 시스템 리소스만을 필요로 한다. VM에 비해 2~3배 많은 애플리케이션을 하나의 서버에서 처리할 수 있게 된다. 이러한 가벼운 특성 덕분에 개발, 테스트, 배포가...","categories": ["ModernCS"],
        "tags": ["VirtualMachine","Container"],
        "url": "http://localhost:4000/moderncs/vm-container/",
        "teaser":"http://localhost:4000/assets/images/500x300.jpg"}]
