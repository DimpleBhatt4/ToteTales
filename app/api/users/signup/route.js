import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { userName, email, password } = reqBody;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    // In case user doesn't exist we'll encrypt user's password using bcryptjs
    const salt = await bcryptjs.genSaltSync(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    console.log(savedUser);


    return NextResponse.json({
      message: "User registered successfully",
      success: true,
      savedUser,
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
