import pandas as pd

def read_excel() -> pd.DataFrame:
    """
    Reads an Excel file and returns a DataFrame.
    """
    file_path = "..\data\Meal_Expenses.xlsx"
    try:
        df = pd.read_excel(file_path, header=2, usecols='B:E', engine='openpyxl')
        return df
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return pd.DataFrame()
    
if __name__ == "__main__":
    df = read_excel()
    df = df.rename(columns={df.columns[0]: "Labels"})
    print(df)


    # print(df)
    # print("Labels:", df.iloc[:, 0])
    # print("Breakfast:", df.iloc[:, 1])
    # print("Lunch:", df.iloc[:, 2])
    # print("Dinner:", df.iloc[:, 3])