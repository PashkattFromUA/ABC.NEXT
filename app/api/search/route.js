import { NextResponse } from "next/server"

async function fetchCards() {
    const response = await fetch('https://api.abcrypto.io/api/categories')
    const cards = await response.json();
    return cards
}

export async function GET(){
    const cards = await fetchCards();
    return NextResponse.json(cards)
}