   const { data, error } = await supabase
      .from("sensor_readings")
      .select("*")
      .order("timestamp", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) throw error;

    res.json({ success: true, data });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      error: "Gagal mengambil data sensor",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Smart Eco-Masjid API berjalan di port ${PORT}`);
});
