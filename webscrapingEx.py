#!/usr/bin/env python3

from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options 
from selenium.webdriver.common .by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


# Configure Chrome options
options = Options()
options.add_argument("--headless=new") # enable headless mode
options.add_argument("--window-size=1920x1200")

# Set the path to the Chromedriver
DRIVER_PATH = 'C:\\Users\\Dfmei\OneDrive\\Documents\\chromedriver-win64\\chromedriver.exe'

# Use Service to specify the driver path
service = Service(executable_path=DRIVER_PATH)

# Initialize the Chrome WebDriver
driver = webdriver.Chrome(service = service, options=options)

# Navigate to the desired URL
driver.get('https://finance.yahoo.com/quote/TSLA/history/')

#Wait for the first article link to load
wait = WebDriverWait(driver, 10)

# Locate the third 'td' of the first 'tr' which contains the article's title and link
tesla_stock_price = wait.until(
    # EC.presence_of_element_located((By.XPATH, '//tr[@class="athing"]/td[3]/a'))
    EC.presence_of_element_located((By.XPATH, '//div[@class="container yf-16vvaki"]'))
    # Yahoo Finances:
    #  EC.presence_of_element_located((By.XPATH, '//table[contains(@class,"historical-prices")]/tbody/tr[1]/td[1]'))
)

# Extract and print the text from the Located Web element
first_word = tesla_stock_price.text.split()[0]
print(first_word)

# Click on the link to navigate to the article's page
#title_element.click()

# Optionally, wait for the new page to load and perform actions there
# For demonstration, let's print the current URL after clicking
print(driver.current_url)

#It's a good practice to close the driver after use
driver.quit()