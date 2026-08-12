import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07090d",
          borderRadius: 16,
          border: "2px solid #1e293b",
        }}
      >
        <div
          style={{
            width: 28,
            height: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#22d3ee",
            fontSize: 28,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          H
        </div>

        <div
          style={{
            width: 4,
            height: 30,
            marginLeft: 4,
            background: "#a78bfa",
            borderRadius: 4,
          }}
        />

        <div
          style={{
            width: 8,
            height: 8,
            marginLeft: 5,
            background: "#22d3ee",
            borderRadius: 999,
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
