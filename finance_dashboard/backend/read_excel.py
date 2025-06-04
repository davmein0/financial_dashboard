import pandas as pd

def read_excel(file_path: str) -> pd.DataFrame:
    """
    Reads an Excel file and returns a DataFrame.
    """
    try:
        df = pd.read_excel(file_path, engine='openpyxl')
        return df
    except Exception as e:
        print(f"Error reading Excel file: {e}")
        return pd.DataFrame()
    
if __name__ == "__main__":
    file_path = "..\data\Meal_Expenses.xlsx"
    df = read_excel(file_path)
    print(df)