.order("timestamp", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error("Gagal mengambil sensor:", error.message);
    res.status(500).json({ error: "Gagal mengambil data sensor" });
  }
}

// Sediakan kedua alamat agar kompatibel dengan kemungkinan
// alamat API yang digunakan website.
app.get("/api/sensors/latest", getLatestSensor);
app.get("/api/sensor/latest", getLatestSensor);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Smart Eco-Masjid API berjalan di port ${PORT}`);
});
