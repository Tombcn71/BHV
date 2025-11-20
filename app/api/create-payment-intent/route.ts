import { NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-01-27.acacia",
})

export async function POST(req: Request) {
  try {
    const { amount, packageName } = await req.json()

    // Create a PaymentIntent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount, // Amount in cents
      currency: "eur",
      payment_method_types: ["card", "ideal"], // Enable both card and iDEAL
      description: `BHV Training - ${packageName}`,
      metadata: {
        package: packageName,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error("[v0] Error creating payment intent:", error)
    return NextResponse.json({ error: "Failed to create payment intent" }, { status: 500 })
  }
}
