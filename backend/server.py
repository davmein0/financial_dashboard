from flask import Flask, jsonify
import read_excel as dp

app = Flask(__name__)

# Home API Route
@app.route("/")
def home():
    return "<h1>Welcome to the Financial Dashboard API</h1>"

# Members API Route
@app.route("/members")
def members():
    df = dp.read_excel()
    #print("Labels:", df[1[1:]])

    df = df.rename(columns={df.columns[0]: "Labels", df.columns[1]: "Breakfast", df.columns[2]: "Lunch", df.columns[3]: "Dinner"})
    print(df)

    # Convert Dataframe to a list of dicitonaries
    data = df.to_dict(orient='records')
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)