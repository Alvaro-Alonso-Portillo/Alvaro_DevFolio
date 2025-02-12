import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    success: true,
    message: 'hle!',
    data: {
      message: 'Mensaje e email enviado Correctamente!',
    }
  }, { status: 200 });
};