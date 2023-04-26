import requests, json, os, time
from bs4 import BeautifulSoup
from selenium import webdriver
# import json, os, time

current_path = os.path.dirname(__file__)
os.chdir(current_path)

##############################
# data_folder = (os.path.join(current_path, 'data'))
# # print(data_folder)

# try:
#     os.mkdir(data_folder)
#     print("OK")
# except FileExistsError as e:
#     print("File exsists")
##############################


# print(current_path)
# print( os.path.join(current_path, 'ChipViewer.py') )


# HEADERS = {
#     'Authorization': 'Token f3820ac3-3c1e-4396-9d4b-7bac33e02d7c',
#     'Content-Type': 'application/json',
# }

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
}

# url = 'https://www.laced.com'
url = 'https://www.laced.com/nike'
response = requests.get(url, headers=headers)

# Parse the content with BeautifulSoup
soup = BeautifulSoup(response.content, 'lxml')

# print(soup.prettify())

# table = soup.find('div', attrs = {'class':'layout-category__main'}) 
# table = soup.find('div', class_='layout-category')

# table = soup.find_all('div', class_='layout-category__main')
# table = soup.find_all('ul')
# table = soup.find_all('ul', class_='product-grid')

table = soup.find('div', class_='layout-category__main')
# for div in table:
#     lis = div.find_all("ul")
#     print(lis)
# lis = table.find_all("ul")
print(table)

# # Инициализируем экземпляр драйвера Selenium
# driver = webdriver.Chrome()

# # Загружаем страницу
# driver.get('https://laced.com/nike')

# # Получаем HTML-код страницы
# html = driver.page_source

# # Инициализируем экземпляр BeautifulSoup
# soup = BeautifulSoup(html, 'lxml')

# # Ищем элементы на странице
# elements = soup.find_all('div', class_='layout-category__main')
# print(elements)
    
#     # Выводим содержимое каждого тега "li"
#     for li in lis:
#         print(li.text)


# table = soup.find_all('div', class_='layout-category')

# table = soup.find('ul', class_='product-items')
# for row in table.findAll('div',
#                          attrs = {'class':'col-6 col-lg-3 text-center margin-30px-bottom sm-margin-30px-top'}):
# print(table)
# print(lis)


    
# l = []
# for id in range(1, 2):
#     general = requests.get(f'https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page={id}', headers=HEADERS)
#     data_1 = general.json()
#     for i in range(len(data_1["films"])):
#         try:
#             id_m = data_1["films"][i]["filmId"]
#             l.append(id_m)
#         except:
#             print('EXIT')
#         finally:
#             continue


# json_data = []            
# for i in l[:3]:
#     response = requests.get(f'https://kinopoiskapiunofficial.tech/api/v2.2/films/{i}', headers=HEADERS)
#     time.sleep(1)
#     budget = requests.get(f'https://kinopoiskapiunofficial.tech/api/v2.2/films/{i}/box_office', headers=HEADERS)
#     data = response.json()
#     data_2 = budget.json()
#     print(data_2)
#     b = data_2['items'][-1]['amount']
#     json_data.append((data, {'budget': b}))
data = {'name': 'John', 'age': 30, 'city': 'New York'}

# try:
#     with open('data.json', 'w', encoding='utf-8') as f:
#         json.dump(data, f)
# except:
#     print('EXIT WRITE')
