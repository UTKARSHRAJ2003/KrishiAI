# Backned/routes/auth.py
from fastapi import APIRouter, HTTPException
from Backned import conn, cursor
from Backned import User

router = APIRouter()

@router.post("/login")
def login(user: User):
    cursor.execute("SELECT * FROM users WHERE username=? AND password=?", (user.username, user.password))
    result = cursor.fetchone()
    if result:
        return {"message": "Login successful"}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")

@router.post("/register")
def register(user: User):
    cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (user.username, user.password))
    conn.commit()
    return {"message": "User registered successfully"}

