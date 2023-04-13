import os
import re
import uvicorn
import openai
from fastapi import FastAPI
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()
app = FastAPI()
origins = [
    "http://localhost:3000",
]
openai.api_key = "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"

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/")
def index(command:str, input_text:str):
    if(command.strip().lower()=='summarize'):
        response = openai.Completion.create(
            engine="text-davinci-001",
            prompt=summarize_prompt(input_text),
            temperature=1,
            max_tokens=1000,
            top_p=0.5,
            frequency_penalty=0,
            presence_penalty=0,
            best_of=3,
            stop=["/n"]
        )

    
    return ({response.choices[0].text})

    


def summarize_prompt(input_text):
    return f"""Summarize this for a second-grade student:
    {input_text}"""

@app.post("/answer")
def question_answer(docs:str,quest:str):
    response=openai.Answer.create(
    search_model="davinci",
    model="davinci",
    question=quest,
    documents=[(docs)],
    examples_context="""Pay the LANDLORD rent on a monthly basis Rent @ Rs. 45,000/- for 35 months from 1st July 2020 , the date of commencement of the lease. The full 35 months of the lease is fixed as lock-in period and cannot be terminated by either the Landlord or TENANTS.
ii. Pay the rent of Rs. 45,000/- per month to the LANDLORD, on or before the 5th of each english calendar month.
iii. The TENANTS have given an interest free advance deposit of Rs. 2,70,000/- (Rupees Two Lakh Seventy Thousand Only) which shall be refunded to the TENANTS by the Landlord in full without interest after deduction of any dues and compensation towards any repairs / damages payable by the TENANTS on expiry of this Rental Agreement.
iv. Pay for all gas and electric light and power which shall be consumed or supplied on or to the property during the tenancy and the amount of the water rate charged in respect of the Apartment during the tenancy and the amount of all charges made for use of the telephone (if any) on the property during the tenancy .
v. Pay also the diesel maintenance charges as & when raised by the facilities management.
vi. Not to allow any outsider other than the TENANTS to stay in side the premises.""",
    examples=[["What is the age of the Landlord?","No references found. For more details go through the document."],["Are pets allowed?","No mention of pets in the agreement. However no outsiders othen than the Tenants are allowed."],["What is the rent?","Rs. 45,000/- per month"],["What is the relationship between landlord and tenants?","Tenants have to pay Rs. 45,000 per month for a period of 35 months"]],
    max_tokens=1000,
    stop=["\n", "<|endoftext|>"],
    )
    print(response)
    return ({response['answers'][0]})

@app.post("/analyse")
def analyse_text(docs:str):
    response=openai.Completion.create(
        engine="text-davinci-001",
        prompt=f"Explain the unfair contract terms in the following contract:\n\n{docs}",
        temperature=0.7,
        max_tokens=1000,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0,
        
        )
    return ({response['choices'][0].text})
    

if __name__=='__main__':
    uvicorn.run(app,host='127.0.0.1',port=8000)
    