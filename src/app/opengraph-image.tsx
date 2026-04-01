import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ziyad Books - Toko Buku Islam";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f0fdf4)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "#5c9e4a",
            borderRadius: "16px",
          }}
        />
        <h1
          style={{
            fontSize: "80px",
            fontWeight: "bold",
            color: "#1f2937",
            margin: 0,
          }}
        >
          Ziyad Books
        </h1>
      </div>
      <p
        style={{
          fontSize: "40px",
          color: "#4b5563",
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        Inspirasi & Literasi Islami Terbaik untuk Keluarga
      </p>
    </div>,
    { ...size },
  );
}
