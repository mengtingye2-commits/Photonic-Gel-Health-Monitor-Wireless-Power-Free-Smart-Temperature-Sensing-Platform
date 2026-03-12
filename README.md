# Photonic Gel Health Monitor

**Wireless Power-Free Smart Temperature Sensing Platform**

*ZhuLab @ Northeastern University*

---

## Overview

The **Photonic Gel Health Monitor** is a browser-based, research-grade temperature sensing platform that converts the color of a 69 wt% HPC (Hydroxypropyl Cellulose) cholesteric liquid crystal sensor into an accurate body temperature reading — entirely from a smartphone camera photo.

No electronics, no batteries, no wires. Just point, shoot, and read.

**Live Demo:** [https://coe.northeastern.edu/research/hongli_group/HPC_Thermal_Health_Monitor.html](https://coe.northeastern.edu/research/hongli_group/HPC_Thermal_Health_Monitor.html)

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Camera-Based Sensing** | Extracts temperature from a photo of the photonic gel sensor using hue analysis |
| **Two-Stage Calibration** | Hue → Wavelength (PCHIP) → Temperature (GPR spline) pipeline with ±0.024°C accuracy |
| **3-Tier Health Assessment** | Normal / Warning (37–38°C) / Fever (≥38°C) with animated face indicators |
| **AI Recommendations** | Rule-based "Think-Analyze-Decide" engine + optional LLM backend (Groq/Llama 3) |
| **6 Subject Types** | Adult, Elderly, Infant, Child, Dog, Cat — each with tailored thresholds |
| **5 Health Conditions** | None, Immune-Compromised, Chronic Illness, Post-Surgery, Pregnancy |
| **Trend Analysis** | Detects rapid rise (2h) and slow rise (20h) patterns |
| **Bilingual (EN/中文)** | Full internationalization with real-time language switching |
| **Simple & Advanced Modes** | Clean view for patients; detailed view for researchers |
| **Fully Offline** | Single HTML file runs entirely in the browser — no server required |

---

## How It Works

### Calibration Pipeline

```
Camera Photo → ROI Selection → Average RGB → HSL Conversion
    → Hue → Monotonic PCHIP (21 pts) → Wavelength (nm)
    → GPR Cubic Spline (130 pts) → Temperature (°C)
```

1. **Image Capture**: User takes a photo of the HPC sensor via camera or file upload
2. **ROI Selection**: User draws a region of interest on the sensor area
3. **Color Extraction**: Average RGB color is computed from the ROI
4. **Hue Calculation**: RGB → HSL conversion extracts the hue angle
5. **Hue → Wavelength**: A 21-point monotonic PCHIP interpolation (with PAVA enforcement) maps image hue to the physical reflected wavelength
6. **Wavelength → Temperature**: A 130-point GPR (Gaussian Process Regression) fit line maps wavelength to temperature via cubic spline interpolation

### Health Assessment

- **3-Tier Risk System**: Normal (< 37°C), Warning (37–38°C), Fever (≥ 38°C)
- **Condition-Aware Thresholds**: Adjusted based on subject type and health conditions
- **2-Consecutive-Reading Rule**: Warnings trigger only after two consecutive readings in the warning zone to filter measurement noise
- **Trend Detection**: Monitors for rapid temperature rises and recovery patterns

---

## Project Structure

```
Project/
├── index.html                          # Main HTML (modular version)
├── HPC_Thermal_Health_Monitor.html     # Merged single-file version (for deployment)
├── css/
│   └── styles.css                      # Application styles
├── js/
│   ├── app.js                          # Core application logic & calibration data
│   └── i18n.js                         # Internationalization (EN + 中文)
├── flask_api/
│   ├── flask_app.py                    # LLM backend API (Groq/Llama 3)
│   └── requirements.txt               # Python dependencies
├── process_images.py                   # Batch image processing & analysis
├── wavelength_temp_plot.py             # Wavelength vs Temperature plot generator
├── plot_42_44.py                       # Zoomed 42–44°C range plot
├── compare_3models.py                  # Model comparison analysis
├── diagnose42.py                       # Temperature cap diagnostics
└── README.md                           # This file
```

---

## Quick Start

### Option 1: Single-File (Recommended)

1. Open `HPC_Thermal_Health_Monitor.html` in any modern browser
2. That's it — everything is self-contained

### Option 2: Modular Development

1. Serve the project directory with any local server:
   ```bash
   # Python
   python -m http.server 8000

   # Node.js
   npx serve .
   ```
2. Open `http://localhost:8000` in your browser

### Option 3: Enable LLM-Enhanced Recommendations (Optional)

The app works fully offline with its built-in rule-based AI engine. To enable cloud-based LLM recommendations:

1. Deploy the Flask API:
   ```bash
   cd flask_api
   pip install -r requirements.txt
   python flask_app.py
   ```
2. Or deploy to [PythonAnywhere](https://www.pythonanywhere.com) (free tier)
3. In the app, toggle **"Use AI Engine"** and enter the API URL
4. The system falls back to the rule-based engine if the LLM is unavailable

---

## Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla HTML/CSS/JavaScript (no framework dependencies) |
| **Charts** | Chart.js with Luxon date adapter |
| **ML Runtime** | TensorFlow.js (loaded via CDN) |
| **Interpolation** | Custom PCHIP & Cubic Spline implementations |
| **LLM Backend** | Flask + Groq API (Llama 3) — optional |
| **Deployment** | Static HTML file (zero infrastructure) |

---

## Calibration Data

- **Sensor**: 69 wt% HPC cholesteric liquid crystal
- **Hue → Wavelength**: 21-point monotonic PCHIP interpolation
  - Built from Raw Data Test images
  - Monotonicity enforced via PAVA (Pool Adjacent Violators Algorithm)
- **Wavelength → Temperature**: 130-point GPR fit line
  - Range: 485.77 nm – 582.79 nm → 34.0°C – 44.0°C
  - Gaussian Process Regression with cubic spline interpolation
- **Validation Accuracy**: ±0.024°C on cyclic test data (84 images)

---

## Usage Guide

1. **Select Subject Profile**: Choose the subject type (Human/Animal) and any health conditions
2. **Capture Image**: Use the camera or upload a photo of the HPC sensor
3. **Draw ROI**: Select the sensor region on the captured image
4. **Analyze**: Click "Capture & Analyze" to get the temperature reading
5. **Review Results**: View the temperature, health status, trend analysis, and AI recommendations
6. **History**: Track readings over time with the built-in chart and history panel

---

## Disclaimer

> **This is a research tool for academic and experimental purposes only.** It is NOT a certified medical device and should NOT be used for clinical diagnosis, treatment decisions, or as a substitute for professional medical advice. Always consult qualified healthcare providers for medical concerns.

---

## Citation

If you use this work in your research, please cite:

> Photonic Gel Health Monitor: Wireless Power-Free Smart Temperature Sensing Platform. ZhuLab, Northeastern University, 2026.

---

## License

Research use only. © ZhuLab @ Northeastern University.
