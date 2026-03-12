/* ================================================================
   Photonic Gel Health Monitor — Main Application
   ZhuLab@NEU — Wireless Power-Free Smart Temperature Sensing
   ================================================================ */

// ======================= CONFIGURATION ==========================
const CONFIG = {
    // Default calibration: Wavelength (nm) -> Temperature (C)
    // 130-point GPR (Gaussian Process Regression) fit line
    // 69 wt% HPC cholesteric liquid crystal sensor
    calibrationVersion: 'GPR-v1',
    defaultCalibration: [
        { wavelength: 485.770, temperature: 34.0000 },
        { wavelength: 486.170, temperature: 34.0775 },
        { wavelength: 486.600, temperature: 34.1550 },
        { wavelength: 487.050, temperature: 34.2326 },
        { wavelength: 487.520, temperature: 34.3101 },
        { wavelength: 488.020, temperature: 34.3876 },
        { wavelength: 488.540, temperature: 34.4651 },
        { wavelength: 489.090, temperature: 34.5426 },
        { wavelength: 489.660, temperature: 34.6202 },
        { wavelength: 490.250, temperature: 34.6977 },
        { wavelength: 490.870, temperature: 34.7752 },
        { wavelength: 491.520, temperature: 34.8527 },
        { wavelength: 492.190, temperature: 34.9302 },
        { wavelength: 492.890, temperature: 35.0078 },
        { wavelength: 493.610, temperature: 35.0853 },
        { wavelength: 494.360, temperature: 35.1628 },
        { wavelength: 495.140, temperature: 35.2403 },
        { wavelength: 495.940, temperature: 35.3178 },
        { wavelength: 496.770, temperature: 35.3953 },
        { wavelength: 497.620, temperature: 35.4729 },
        { wavelength: 498.500, temperature: 35.5504 },
        { wavelength: 499.410, temperature: 35.6279 },
        { wavelength: 500.340, temperature: 35.7054 },
        { wavelength: 501.290, temperature: 35.7829 },
        { wavelength: 502.270, temperature: 35.8605 },
        { wavelength: 503.280, temperature: 35.9380 },
        { wavelength: 504.300, temperature: 36.0155 },
        { wavelength: 505.350, temperature: 36.0930 },
        { wavelength: 506.420, temperature: 36.1705 },
        { wavelength: 507.510, temperature: 36.2481 },
        { wavelength: 508.610, temperature: 36.3256 },
        { wavelength: 509.740, temperature: 36.4031 },
        { wavelength: 510.880, temperature: 36.4806 },
        { wavelength: 512.050, temperature: 36.5581 },
        { wavelength: 513.220, temperature: 36.6357 },
        { wavelength: 514.410, temperature: 36.7132 },
        { wavelength: 515.620, temperature: 36.7907 },
        { wavelength: 516.830, temperature: 36.8682 },
        { wavelength: 518.060, temperature: 36.9457 },
        { wavelength: 519.300, temperature: 37.0233 },
        { wavelength: 520.540, temperature: 37.1008 },
        { wavelength: 521.800, temperature: 37.1783 },
        { wavelength: 523.060, temperature: 37.2558 },
        { wavelength: 524.320, temperature: 37.3333 },
        { wavelength: 525.600, temperature: 37.4109 },
        { wavelength: 526.870, temperature: 37.4884 },
        { wavelength: 528.150, temperature: 37.5659 },
        { wavelength: 529.430, temperature: 37.6434 },
        { wavelength: 530.710, temperature: 37.7209 },
        { wavelength: 531.990, temperature: 37.7984 },
        { wavelength: 533.270, temperature: 37.8760 },
        { wavelength: 534.550, temperature: 37.9535 },
        { wavelength: 535.820, temperature: 38.0310 },
        { wavelength: 537.090, temperature: 38.1085 },
        { wavelength: 538.350, temperature: 38.1860 },
        { wavelength: 539.610, temperature: 38.2636 },
        { wavelength: 540.860, temperature: 38.3411 },
        { wavelength: 542.100, temperature: 38.4186 },
        { wavelength: 543.330, temperature: 38.4961 },
        { wavelength: 544.560, temperature: 38.5736 },
        { wavelength: 545.770, temperature: 38.6512 },
        { wavelength: 546.970, temperature: 38.7287 },
        { wavelength: 548.160, temperature: 38.8062 },
        { wavelength: 549.330, temperature: 38.8837 },
        { wavelength: 550.490, temperature: 38.9612 },
        { wavelength: 551.630, temperature: 39.0388 },
        { wavelength: 552.760, temperature: 39.1163 },
        { wavelength: 553.870, temperature: 39.1938 },
        { wavelength: 554.970, temperature: 39.2713 },
        { wavelength: 556.050, temperature: 39.3488 },
        { wavelength: 557.100, temperature: 39.4264 },
        { wavelength: 558.140, temperature: 39.5039 },
        { wavelength: 559.160, temperature: 39.5814 },
        { wavelength: 560.160, temperature: 39.6589 },
        { wavelength: 561.130, temperature: 39.7364 },
        { wavelength: 562.090, temperature: 39.8140 },
        { wavelength: 563.020, temperature: 39.8915 },
        { wavelength: 563.930, temperature: 39.9690 },
        { wavelength: 564.820, temperature: 40.0465 },
        { wavelength: 565.680, temperature: 40.1240 },
        { wavelength: 566.530, temperature: 40.2016 },
        { wavelength: 567.340, temperature: 40.2791 },
        { wavelength: 568.140, temperature: 40.3566 },
        { wavelength: 568.910, temperature: 40.4341 },
        { wavelength: 569.660, temperature: 40.5116 },
        { wavelength: 570.380, temperature: 40.5891 },
        { wavelength: 571.080, temperature: 40.6667 },
        { wavelength: 571.760, temperature: 40.7442 },
        { wavelength: 572.410, temperature: 40.8217 },
        { wavelength: 573.040, temperature: 40.8992 },
        { wavelength: 573.640, temperature: 40.9767 },
        { wavelength: 574.230, temperature: 41.0543 },
        { wavelength: 574.790, temperature: 41.1318 },
        { wavelength: 575.330, temperature: 41.2093 },
        { wavelength: 575.850, temperature: 41.2868 },
        { wavelength: 576.350, temperature: 41.3643 },
        { wavelength: 576.820, temperature: 41.4419 },
        { wavelength: 577.280, temperature: 41.5194 },
        { wavelength: 577.720, temperature: 41.5969 },
        { wavelength: 578.140, temperature: 41.6744 },
        { wavelength: 578.540, temperature: 41.7519 },
        { wavelength: 578.920, temperature: 41.8295 },
        { wavelength: 579.290, temperature: 41.9070 },
        { wavelength: 579.640, temperature: 41.9845 },
        { wavelength: 579.970, temperature: 42.0620 },
        { wavelength: 580.290, temperature: 42.1395 },
        { wavelength: 580.590, temperature: 42.2171 },
        { wavelength: 580.880, temperature: 42.2946 },
        { wavelength: 581.160, temperature: 42.3721 },
        { wavelength: 581.420, temperature: 42.4496 },
        { wavelength: 581.670, temperature: 42.5271 },
        { wavelength: 581.910, temperature: 42.6047 },
        { wavelength: 582.140, temperature: 42.6822 },
        { wavelength: 582.350, temperature: 42.7597 },
        { wavelength: 582.560, temperature: 42.8372 },
        { wavelength: 582.750, temperature: 42.9147 },
        { wavelength: 582.930, temperature: 42.9922 },
        { wavelength: 583.100, temperature: 43.0698 },
        { wavelength: 583.260, temperature: 43.1473 },
        { wavelength: 583.420, temperature: 43.2248 },
        { wavelength: 583.560, temperature: 43.3023 },
        { wavelength: 583.690, temperature: 43.3798 },
        { wavelength: 583.810, temperature: 43.4574 },
        { wavelength: 583.930, temperature: 43.5349 },
        { wavelength: 584.030, temperature: 43.6124 },
        { wavelength: 584.130, temperature: 43.6899 },
        { wavelength: 584.210, temperature: 43.7674 },
        { wavelength: 584.290, temperature: 43.8450 },
        { wavelength: 584.360, temperature: 43.9225 },
        { wavelength: 584.420, temperature: 44.0000 },
    ],

    // Risk thresholds per subject type — Simplified 3-zone system:
    //   Level 0: Normal    (< warningStart)  → Smiley face, green
    //   Level 1: Warning   (warningStart–feverStart) → Neutral face, amber
    //   Level 2: Fever     (≥ feverStart)    → Crying face, red
    // warningStart/feverStart shift down for conditions (immune, pregnancy, etc.)
    riskThresholds: {
        'human-adult':   { normalLow: 36.1, warningStart: 37.0, feverStart: 38.0, baseline: 36.6 },
        'human-elderly': { normalLow: 35.8, warningStart: 36.8, feverStart: 37.5, baseline: 36.4 },
        'human-infant':  { normalLow: 36.4, warningStart: 37.5, feverStart: 38.0, baseline: 37.0 },
        'human-child':   { normalLow: 36.1, warningStart: 37.0, feverStart: 38.0, baseline: 36.7 },
        'animal-dog':    { normalLow: 38.0, warningStart: 39.2, feverStart: 40.0, baseline: 38.6 },
        'animal-cat':    { normalLow: 38.1, warningStart: 39.2, feverStart: 40.0, baseline: 38.5 },
    },

    // Trend thresholds
    rapidRise: {
        tempIncrease: 2.0,     // C increase
        timeWindow: 2 * 3600000 // 2 hours in ms
    },
    slowRise: {
        tempIncrease: 1.5,
        timeWindow: 20 * 3600000 // 20 hours in ms
    },
    recoveryConsecutive: 3, // Consecutive normal readings to confirm recovery
};

// ======================= CUBIC SPLINE INTERPOLATION =============
class CubicSpline {
    constructor(xs, ys) {
        this.xs = xs;
        this.ys = ys;
        this.n = xs.length;
        this.build();
    }

    build() {
        const n = this.n;
        const xs = this.xs;
        const ys = this.ys;

        // Natural cubic spline coefficients
        const h = [];
        for (let i = 0; i < n - 1; i++) {
            h.push(xs[i + 1] - xs[i]);
        }

        const alpha = [0];
        for (let i = 1; i < n - 1; i++) {
            alpha.push((3 / h[i]) * (ys[i + 1] - ys[i]) - (3 / h[i - 1]) * (ys[i] - ys[i - 1]));
        }

        const l = new Array(n).fill(1);
        const mu = new Array(n).fill(0);
        const z = new Array(n).fill(0);

        for (let i = 1; i < n - 1; i++) {
            l[i] = 2 * (xs[i + 1] - xs[i - 1]) - h[i - 1] * mu[i - 1];
            mu[i] = h[i] / l[i];
            z[i] = (alpha[i] - h[i - 1] * z[i - 1]) / l[i];
        }

        this.b = new Array(n).fill(0);
        this.c = new Array(n).fill(0);
        this.d = new Array(n).fill(0);

        for (let j = n - 2; j >= 0; j--) {
            this.c[j] = z[j] - mu[j] * this.c[j + 1];
            this.b[j] = (ys[j + 1] - ys[j]) / h[j] - h[j] * (this.c[j + 1] + 2 * this.c[j]) / 3;
            this.d[j] = (this.c[j + 1] - this.c[j]) / (3 * h[j]);
        }
    }

    interpolate(x) {
        const xs = this.xs;
        const ys = this.ys;
        const n = this.n;

        // Clamp to range
        if (x <= xs[0]) return ys[0];
        if (x >= xs[n - 1]) return ys[n - 1];

        // Find segment
        let i = 0;
        for (let j = 0; j < n - 1; j++) {
            if (x >= xs[j] && x <= xs[j + 1]) {
                i = j;
                break;
            }
        }

        const dx = x - xs[i];
        return ys[i] + this.b[i] * dx + this.c[i] * dx * dx + this.d[i] * dx * dx * dx;
    }
}

// ======================= HUE → WAVELENGTH CALIBRATION ===========
// Monotonic PCHIP calibration: maps image hue to physical wavelength
// Built from 21 Raw Data Test images + GPR fit line (inverse lookup)
// Monotonicity enforced via PAVA (Pool Adjacent Violators Algorithm)
// ================================================================
class HueWavelengthCalibration {
    constructor() {
        // 21 calibration points: (hue, wavelength) — sorted ascending by hue
        // Wavelengths are monotonically decreasing (higher hue = shorter wavelength)
        // Points 16,17 merged by PAVA to enforce monotonicity
        this.hues = [33.69, 35.09, 37.47, 44.93, 45.49, 46.87, 54.35, 67.35, 80.11, 89.66, 97.59, 121.69, 150.59, 155.78, 157.30, 163.66, 168.94, 174.00, 182.67, 185.02, 187.28];
        this.wavelengths = [582.79, 581.61, 579.98, 577.66, 572.24, 572.24, 565.52, 561.28, 557.59, 554.14, 550.33, 545.31, 538.47, 529.98, 520.73, 511.90, 504.26, 497.94, 492.82, 488.79, 485.77];
        this.buildPchip();
    }

    buildPchip() {
        const xs = this.hues;
        const ys = this.wavelengths;
        const n = xs.length;

        // Compute PCHIP derivatives (Fritsch-Carlson method)
        const h = [];
        const delta = [];
        for (let i = 0; i < n - 1; i++) {
            h.push(xs[i + 1] - xs[i]);
            delta.push((ys[i + 1] - ys[i]) / h[i]);
        }

        // Initialize derivatives
        this.d = new Array(n).fill(0);

        // Interior points
        for (let i = 1; i < n - 1; i++) {
            if (delta[i - 1] * delta[i] <= 0) {
                this.d[i] = 0;  // Sign change → zero derivative (monotonicity)
            } else {
                // Harmonic mean weighted by segment lengths
                const w1 = 2 * h[i] + h[i - 1];
                const w2 = h[i] + 2 * h[i - 1];
                this.d[i] = (w1 + w2) / (w1 / delta[i - 1] + w2 / delta[i]);
            }
        }

        // Endpoints: one-sided shape-preserving
        this.d[0] = ((2 * h[0] + h[1]) * delta[0] - h[0] * delta[1]) / (h[0] + h[1]);
        if (this.d[0] * delta[0] <= 0) this.d[0] = 0;
        else if (delta[0] * delta[1] <= 0 && Math.abs(this.d[0]) > Math.abs(3 * delta[0]))
            this.d[0] = 3 * delta[0];

        const nm = n - 1;
        this.d[nm] = ((2 * h[nm - 1] + h[nm - 2]) * delta[nm - 1] - h[nm - 1] * delta[nm - 2]) / (h[nm - 1] + h[nm - 2]);
        if (this.d[nm] * delta[nm - 1] <= 0) this.d[nm] = 0;
        else if (delta[nm - 1] * delta[nm - 2] <= 0 && Math.abs(this.d[nm]) > Math.abs(3 * delta[nm - 1]))
            this.d[nm] = 3 * delta[nm - 1];

        this.h = h;
    }

    interpolate(hue) {
        const xs = this.hues;
        const ys = this.wavelengths;
        const n = xs.length;

        // Clamp to calibration range
        if (hue <= xs[0]) return ys[0];
        if (hue >= xs[n - 1]) return ys[n - 1];

        // Find segment (binary search)
        let lo = 0, hi = n - 2;
        while (lo < hi) {
            const mid = (lo + hi) >> 1;
            if (hue < xs[mid + 1]) hi = mid;
            else lo = mid + 1;
        }
        const i = lo;

        // Hermite basis
        const dx = xs[i + 1] - xs[i];
        const t = (hue - xs[i]) / dx;
        const t2 = t * t;
        const t3 = t2 * t;

        const h00 = 2 * t3 - 3 * t2 + 1;
        const h10 = t3 - 2 * t2 + t;
        const h01 = -2 * t3 + 3 * t2;
        const h11 = t3 - t2;

        return h00 * ys[i] + h10 * dx * this.d[i] + h01 * ys[i + 1] + h11 * dx * this.d[i + 1];
    }
}

// Global instance
const hueWlCalibration = new HueWavelengthCalibration();

// ======================= CALIBRATION CURVE ======================
class CalibrationCurve {
    constructor() {
        this.points = [];
        this.spline = null;
        this.load();
    }

    load() {
        // Version check: force recalibration when fit-line data changes
        const CAL_VERSION = 'GPR-130pt-PCHIP-v1';
        const savedVersion = localStorage.getItem('hpc_cal_version');
        const saved = localStorage.getItem('hpc_calibration');
        if (saved && savedVersion === CAL_VERSION) {
            try {
                this.points = JSON.parse(saved);
            } catch {
                this.resetToDefault();
            }
        } else {
            this.resetToDefault();
            localStorage.setItem('hpc_cal_version', CAL_VERSION);
        }
        this.rebuildSpline();
    }

    save() {
        localStorage.setItem('hpc_calibration', JSON.stringify(this.points));
    }

    resetToDefault() {
        this.points = JSON.parse(JSON.stringify(CONFIG.defaultCalibration));
        this.save();
    }

    rebuildSpline() {
        // Sort by wavelength ascending for proper spline interpolation
        const sorted = [...this.points].sort((a, b) => a.wavelength - b.wavelength);
        if (sorted.length >= 2) {
            const xs = sorted.map(p => p.wavelength);
            const ys = sorted.map(p => p.temperature);
            this.spline = new CubicSpline(xs, ys);
        }
    }

    wavelengthToTemp(wavelength) {
        if (!this.spline) return null;
        // Spline xs are sorted ascending (400nm to 700nm), temperatures decrease (42C to 32C)
        // Higher wavelength (red) = lower temperature, shorter wavelength (blue) = higher temperature
        return this.spline.interpolate(wavelength);
    }

    addPoint(wavelength, temperature) {
        this.points.push({ wavelength, temperature });
        this.rebuildSpline();
        this.save();
    }

    removePoint(index) {
        this.points.splice(index, 1);
        this.rebuildSpline();
        this.save();
    }

    updatePoint(index, wavelength, temperature) {
        this.points[index] = { wavelength, temperature };
        this.rebuildSpline();
        this.save();
    }
}

// ======================= COLOR ANALYZER =========================
class ColorAnalyzer {
    /**
     * Extract average RGB from a canvas region.
     * If no ROI, uses entire canvas.
     */
    static getAverageColor(canvas, roi = null) {
        const ctx = canvas.getContext('2d');
        let x, y, w, h;

        if (roi) {
            x = Math.max(0, Math.round(roi.x));
            y = Math.max(0, Math.round(roi.y));
            w = Math.min(Math.round(roi.w), canvas.width - x);
            h = Math.min(Math.round(roi.h), canvas.height - y);
        } else {
            x = 0; y = 0; w = canvas.width; h = canvas.height;
        }

        if (w <= 0 || h <= 0) return null;

        const imageData = ctx.getImageData(x, y, w, h);
        const data = imageData.data;
        let rSum = 0, gSum = 0, bSum = 0;
        const pixelCount = data.length / 4;

        for (let i = 0; i < data.length; i += 4) {
            rSum += data[i];
            gSum += data[i + 1];
            bSum += data[i + 2];
        }

        return {
            r: Math.round(rSum / pixelCount),
            g: Math.round(gSum / pixelCount),
            b: Math.round(bSum / pixelCount),
        };
    }

    /**
     * Convert RGB to HSL
     */
    static rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max === min) {
            h = s = 0;
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
                case g: h = ((b - r) / d + 2) / 6; break;
                case b: h = ((r - g) / d + 4) / 6; break;
            }
        }

        return {
            h: Math.round(h * 36000) / 100,  // 2 decimal places for PCHIP precision
            s: Math.round(s * 10000) / 100,
            l: Math.round(l * 10000) / 100
        };
    }

    /**
     * Convert sRGB to linear RGB
     */
    static srgbToLinear(c) {
        c /= 255;
        return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    }

    /**
     * Convert RGB to CIE XYZ
     */
    static rgbToXyz(r, g, b) {
        const lr = this.srgbToLinear(r);
        const lg = this.srgbToLinear(g);
        const lb = this.srgbToLinear(b);

        return {
            x: 0.4124564 * lr + 0.3575761 * lg + 0.1804375 * lb,
            y: 0.2126729 * lr + 0.7151522 * lg + 0.0721750 * lb,
            z: 0.0193339 * lr + 0.1191920 * lg + 0.9503041 * lb,
        };
    }

    /**
     * Convert XYZ to CIE xy chromaticity
     */
    static xyzToChromaticity(X, Y, Z) {
        const sum = X + Y + Z;
        if (sum === 0) return { x: 0.3127, y: 0.3290 }; // D65 white point
        return { x: X / sum, y: Y / sum };
    }

    /**
     * Convert RGB color to approximate dominant wavelength using CIE chromaticity.
     * Uses the spectrum locus to find the dominant wavelength.
     */
    static rgbToWavelength(r, g, b) {
        // CIE 1931 2° standard observer spectrum locus — 1nm resolution (380–700nm)
        // Reference: CIE 015:2018, "Colorimetry, 4th Edition"
        const spectrumLocus = [
            [380,0.1741,0.0050],[381,0.1740,0.0050],[382,0.1738,0.0049],[383,0.1736,0.0049],
            [384,0.1733,0.0048],[385,0.1730,0.0048],[386,0.1726,0.0048],[387,0.1723,0.0048],
            [388,0.1719,0.0048],[389,0.1714,0.0051],[390,0.1711,0.0051],[391,0.1707,0.0052],
            [392,0.1703,0.0053],[393,0.1699,0.0054],[394,0.1695,0.0055],[395,0.1691,0.0056],
            [396,0.1687,0.0057],[397,0.1683,0.0058],[398,0.1679,0.0059],[399,0.1675,0.0061],
            [400,0.1672,0.0062],[401,0.1669,0.0063],[402,0.1667,0.0064],[403,0.1664,0.0065],
            [404,0.1662,0.0067],[405,0.1660,0.0069],[406,0.1658,0.0071],[407,0.1655,0.0073],
            [408,0.1653,0.0074],[409,0.1651,0.0076],[410,0.1649,0.0078],[411,0.1647,0.0080],
            [412,0.1645,0.0082],[413,0.1643,0.0085],[414,0.1640,0.0087],[415,0.1637,0.0090],
            [416,0.1634,0.0093],[417,0.1631,0.0096],[418,0.1627,0.0099],[419,0.1623,0.0103],
            [420,0.1619,0.0107],[421,0.1614,0.0111],[422,0.1609,0.0116],[423,0.1604,0.0121],
            [424,0.1598,0.0127],[425,0.1592,0.0133],[426,0.1586,0.0139],[427,0.1579,0.0146],
            [428,0.1572,0.0154],[429,0.1564,0.0162],[430,0.1556,0.0171],[431,0.1548,0.0180],
            [432,0.1539,0.0190],[433,0.1530,0.0200],[434,0.1520,0.0211],[435,0.1510,0.0223],
            [436,0.1499,0.0236],[437,0.1488,0.0249],[438,0.1476,0.0263],[439,0.1464,0.0278],
            [440,0.1451,0.0294],[441,0.1438,0.0310],[442,0.1424,0.0328],[443,0.1410,0.0346],
            [444,0.1396,0.0366],[445,0.1382,0.0389],[446,0.1367,0.0412],[447,0.1351,0.0437],
            [448,0.1335,0.0463],[449,0.1319,0.0490],[450,0.1302,0.0518],[451,0.1284,0.0548],
            [452,0.1266,0.0579],[453,0.1247,0.0612],[454,0.1229,0.0647],[455,0.1209,0.0685],
            [456,0.1189,0.0725],[457,0.1169,0.0768],[458,0.1148,0.0812],[459,0.1127,0.0860],
            [460,0.1106,0.0910],[461,0.1084,0.0963],[462,0.1062,0.1020],[463,0.1040,0.1079],
            [464,0.1017,0.1142],[465,0.0994,0.1209],[466,0.0970,0.1281],[467,0.0946,0.1356],
            [468,0.0921,0.1432],[469,0.0896,0.1511],[470,0.0871,0.1593],[471,0.0846,0.1681],
            [472,0.0821,0.1773],[473,0.0796,0.1870],[474,0.0771,0.1969],[475,0.0746,0.2072],
            [476,0.0721,0.2181],[477,0.0696,0.2296],[478,0.0671,0.2416],[479,0.0646,0.2539],
            [480,0.0622,0.2666],[481,0.0598,0.2799],[482,0.0575,0.2937],[483,0.0553,0.3079],
            [484,0.0531,0.3224],[485,0.0510,0.3371],[486,0.0489,0.3520],[487,0.0469,0.3672],
            [488,0.0450,0.3827],[489,0.0432,0.3982],[490,0.0414,0.4139],[491,0.0397,0.4296],
            [492,0.0381,0.4452],[493,0.0366,0.4607],[494,0.0352,0.4761],[495,0.0340,0.4909],
            [496,0.0328,0.5054],[497,0.0318,0.5194],[498,0.0308,0.5329],[499,0.0299,0.5459],
            [500,0.0291,0.5583],[501,0.0283,0.5702],[502,0.0276,0.5815],[503,0.0270,0.5923],
            [504,0.0264,0.6026],[505,0.0259,0.6124],[506,0.0254,0.6217],[507,0.0250,0.6306],
            [508,0.0247,0.6391],[509,0.0244,0.6472],[510,0.0242,0.6548],[511,0.0240,0.6620],
            [512,0.0239,0.6689],[513,0.0238,0.6755],[514,0.0238,0.6816],[515,0.0239,0.6873],
            [516,0.0240,0.6928],[517,0.0241,0.6981],[518,0.0243,0.7030],[519,0.0246,0.7074],
            [520,0.0249,0.7117],[521,0.0253,0.7159],[522,0.0258,0.7196],[523,0.0263,0.7229],
            [524,0.0269,0.7260],[525,0.0276,0.7289],[526,0.0284,0.7315],[527,0.0293,0.7340],
            [528,0.0303,0.7361],[529,0.0313,0.7381],[530,0.0325,0.7399],[531,0.0338,0.7414],
            [532,0.0352,0.7427],[533,0.0368,0.7438],[534,0.0384,0.7447],[535,0.0402,0.7453],
            [536,0.0421,0.7457],[537,0.0441,0.7459],[538,0.0463,0.7459],[539,0.0487,0.7457],
            [540,0.0513,0.7453],[541,0.0541,0.7446],[542,0.0571,0.7438],[543,0.0602,0.7427],
            [544,0.0635,0.7414],[545,0.0670,0.7399],[546,0.0707,0.7382],[547,0.0746,0.7363],
            [548,0.0788,0.7341],[549,0.0832,0.7318],[550,0.0879,0.7293],[551,0.0929,0.7266],
            [552,0.0981,0.7236],[553,0.1036,0.7205],[554,0.1094,0.7172],[555,0.1155,0.7137],
            [556,0.1219,0.7099],[557,0.1286,0.7059],[558,0.1356,0.7018],[559,0.1429,0.6975],
            [560,0.1505,0.6930],[561,0.1583,0.6882],[562,0.1664,0.6833],[563,0.1748,0.6782],
            [564,0.1835,0.6729],[565,0.1925,0.6674],[566,0.2017,0.6616],[567,0.2112,0.6558],
            [568,0.2210,0.6497],[569,0.2310,0.6435],[570,0.2413,0.6372],[571,0.2519,0.6308],
            [572,0.2628,0.6242],[573,0.2740,0.6174],[574,0.2853,0.6105],[575,0.2967,0.6035],
            [576,0.3082,0.5965],[577,0.3199,0.5894],[578,0.3316,0.5823],[579,0.3434,0.5752],
            [580,0.3553,0.5681],[581,0.3672,0.5610],[582,0.3792,0.5539],[583,0.3911,0.5468],
            [584,0.4031,0.5397],[585,0.4151,0.5326],[586,0.4270,0.5255],[587,0.4389,0.5184],
            [588,0.4507,0.5113],[589,0.4624,0.5043],[590,0.4740,0.4973],[591,0.4854,0.4904],
            [592,0.4966,0.4836],[593,0.5076,0.4768],[594,0.5183,0.4702],[595,0.5288,0.4637],
            [596,0.5390,0.4573],[597,0.5489,0.4511],[598,0.5585,0.4451],[599,0.5678,0.4392],
            [600,0.5767,0.4336],[601,0.5852,0.4282],[602,0.5934,0.4230],[603,0.6012,0.4180],
            [604,0.6087,0.4132],[605,0.6159,0.4086],[606,0.6226,0.4042],[607,0.6291,0.4000],
            [608,0.6352,0.3960],[609,0.6410,0.3922],[610,0.6465,0.3886],[611,0.6516,0.3852],
            [612,0.6564,0.3819],[613,0.6610,0.3789],[614,0.6652,0.3760],[615,0.6692,0.3733],
            [616,0.6729,0.3708],[617,0.6763,0.3685],[618,0.6795,0.3663],[619,0.6824,0.3643],
            [620,0.6852,0.3623],[621,0.6877,0.3606],[622,0.6901,0.3589],[623,0.6923,0.3574],
            [624,0.6943,0.3560],[625,0.6962,0.3547],[626,0.6980,0.3534],[627,0.6997,0.3523],
            [628,0.7012,0.3512],[629,0.7026,0.3502],[630,0.7039,0.3493],[631,0.7051,0.3484],
            [632,0.7063,0.3476],[633,0.7074,0.3469],[634,0.7084,0.3462],[635,0.7093,0.3456],
            [636,0.7102,0.3450],[637,0.7110,0.3445],[638,0.7118,0.3440],[639,0.7125,0.3435],
            [640,0.7132,0.3431],[641,0.7138,0.3427],[642,0.7143,0.3424],[643,0.7149,0.3420],
            [644,0.7154,0.3417],[645,0.7159,0.3414],[646,0.7163,0.3411],[647,0.7168,0.3409],
            [648,0.7172,0.3407],[649,0.7176,0.3405],[650,0.7179,0.3403],[651,0.7183,0.3401],
            [652,0.7186,0.3399],[653,0.7189,0.3397],[654,0.7192,0.3396],[655,0.7195,0.3394],
            [656,0.7197,0.3393],[657,0.7200,0.3392],[658,0.7202,0.3391],[659,0.7204,0.3390],
            [660,0.7206,0.3389],[661,0.7208,0.3388],[662,0.7210,0.3387],[663,0.7212,0.3386],
            [664,0.7213,0.3386],[665,0.7215,0.3385],[666,0.7217,0.3384],[667,0.7218,0.3384],
            [668,0.7220,0.3383],[669,0.7221,0.3383],[670,0.7222,0.3382],[671,0.7223,0.3382],
            [672,0.7224,0.3381],[673,0.7225,0.3381],[674,0.7226,0.3381],[675,0.7227,0.3380],
            [676,0.7228,0.3380],[677,0.7229,0.3380],[678,0.7230,0.3380],[679,0.7231,0.3379],
            [680,0.7231,0.3379],[681,0.7232,0.3379],[682,0.7232,0.3379],[683,0.7233,0.3379],
            [684,0.7233,0.3378],[685,0.7234,0.3378],[686,0.7234,0.3378],[687,0.7234,0.3378],
            [688,0.7235,0.3378],[689,0.7235,0.3378],[690,0.7235,0.3378],[691,0.7235,0.3377],
            [692,0.7236,0.3377],[693,0.7236,0.3377],[694,0.7236,0.3377],[695,0.7236,0.3377],
            [696,0.7236,0.3377],[697,0.7236,0.3377],[698,0.7237,0.3377],[699,0.7237,0.3377],
            [700,0.7237,0.3377],
        ];

        // D65 white point
        const wx = 0.3127, wy = 0.3290;

        // Convert RGB to xy chromaticity
        const xyz = this.rgbToXyz(r, g, b);
        const chr = this.xyzToChromaticity(xyz.x, xyz.y, xyz.z);

        // Find dominant wavelength:
        // Draw line from white point through sample to spectrum locus
        const dx = chr.x - wx;
        const dy = chr.y - wy;

        // If very close to white point, return a neutral wavelength
        if (Math.sqrt(dx * dx + dy * dy) < 0.01) {
            return 550; // neutral
        }

        // Find closest intersection with spectrum locus
        let bestWl = 550;
        let bestDist = Infinity;

        for (let i = 0; i < spectrumLocus.length - 1; i++) {
            const [wl1, x1, y1] = spectrumLocus[i];
            const [wl2, x2, y2] = spectrumLocus[i + 1];

            // Parametric intersection of ray from white point through sample
            // with line segment on spectrum locus
            const t = this.raySegmentIntersect(wx, wy, dx, dy, x1, y1, x2, y2);
            if (t !== null && t.s > 0) {
                // Interpolate wavelength along segment
                const wl = wl1 + t.t * (wl2 - wl1);
                const dist = t.s;
                if (dist < bestDist || (Math.abs(dist - bestDist) < 0.001 && Math.abs(wl - 550) < Math.abs(bestWl - 550))) {
                    bestDist = dist;
                    bestWl = wl;
                }
            }
        }

        // Check for complementary (purple line) — if intersection is behind white point
        // In that case, use HSL hue approximation
        if (bestDist === Infinity) {
            const hsl = this.rgbToHsl(r, g, b);
            bestWl = this.hueToWavelength(hsl.h);
        }

        return Math.round(bestWl * 100) / 100; // 2 decimal places for precision
    }

    /**
     * Ray-segment intersection.
     * Ray: P = (ox,oy) + s*(dx,dy), s>0
     * Segment: Q = (x1,y1) + t*(x2-x1,y2-y1), 0<=t<=1
     * Returns {s, t} or null
     */
    static raySegmentIntersect(ox, oy, dx, dy, x1, y1, x2, y2) {
        const ex = x2 - x1, ey = y2 - y1;
        const denom = dx * ey - dy * ex;
        if (Math.abs(denom) < 1e-10) return null;

        const t = ((ox - x1) * (-dy) - (oy - y1) * (-dx)) / denom;
        const s = ((ox - x1) * ey - (oy - y1) * ex) / denom;

        if (t >= 0 && t <= 1 && s > 0) {
            return { s, t };
        }
        return null;
    }

    /**
     * Approximate wavelength from HSL hue (fallback method)
     */
    static hueToWavelength(hue) {
        // Hue 0-360 mapping to visible spectrum
        // Red=0 ~700nm, Yellow=60 ~580nm, Green=120 ~530nm,
        // Cyan=180 ~490nm, Blue=240 ~470nm, Violet=270 ~420nm
        if (hue <= 15) return 700 - (hue / 15) * 20;          // 700-680
        if (hue <= 45) return 680 - ((hue - 15) / 30) * 80;   // 680-600
        if (hue <= 65) return 600 - ((hue - 45) / 20) * 20;   // 600-580
        if (hue <= 120) return 580 - ((hue - 65) / 55) * 50;  // 580-530
        if (hue <= 180) return 530 - ((hue - 120) / 60) * 40; // 530-490
        if (hue <= 240) return 490 - ((hue - 180) / 60) * 20; // 490-470
        if (hue <= 300) return 470 - ((hue - 240) / 60) * 50; // 470-420
        return 420 - ((hue - 300) / 60) * 40;                  // 420-380
    }
}

// ======================= RISK ASSESSOR ==========================
/**
 * Simplified 3-level risk system:
 *   Level 0: Normal  (< warningStart)  → green, smiley
 *   Level 1: Warning (warningStart … feverStart) → amber, neutral face
 *   Level 2: Fever   (≥ feverStart)    → red, crying face
 *
 * Condition-aware: for at-risk patients the boundaries shift downward.
 */
class RiskAssessor {
    /** Condition offsets (°C subtracted from warningStart & feverStart) */
    static CONDITION_OFFSETS = {
        'none':               0,
        'immune-compromised': 0.5,
        'chronic-illness':    0.3,
        'post-surgery':       0.3,
        'pregnancy':          0.3,
    };

    static getRiskLevel(temperature, subjectType, conditions = 'none') {
        const thresholds = CONFIG.riskThresholds[subjectType];
        if (!thresholds) return { level: 0, label: 'Unknown', color: '#999' };

        const offset = this.CONDITION_OFFSETS[conditions] || 0;
        const warnStart = thresholds.warningStart - offset;
        const feverStart = thresholds.feverStart - offset;

        if (temperature < warnStart) {
            return { level: 0, label: I18n.t('risk.normal'), color: '#22c55e' };
        }
        if (temperature < feverStart) {
            return { level: 1, label: I18n.t('risk.warning'), color: '#f59e0b' };
        }
        return { level: 2, label: I18n.t('risk.fever'), color: '#ef4444' };
    }

    static getRiskPercentage(temperature, subjectType, conditions = 'none') {
        const thresholds = CONFIG.riskThresholds[subjectType];
        if (!thresholds) return 10;

        const offset = this.CONDITION_OFFSETS[conditions] || 0;
        const minT = thresholds.normalLow - 1;
        const maxT = thresholds.feverStart - offset + 2;
        const pct = ((temperature - minT) / (maxT - minT)) * 100;
        return Math.max(2, Math.min(98, pct));
    }
}

// ======================= PROBABILITY CALCULATOR ===================
class ProbabilityCalculator {
    /**
     * Condition-specific modifiers for probability calculations.
     * Each condition shifts sigmoid midpoints and/or adds probability boosts.
     *   feverShift:     lower the sigmoid midpoint for fever (triggers earlier)
     *   feverBoost:     flat % added to fever probability
     *   infectionBoost: flat % added to infection probability
     *   heatBoost:      flat % added to heat stress probability
     */
    static CONDITION_MODIFIERS = {
        'none':                { feverShift: 0,    feverBoost: 0,  infectionBoost: 0,  heatBoost: 0  },
        'immune-compromised':  { feverShift: 0.3,  feverBoost: 5,  infectionBoost: 15, heatBoost: 0  },
        'chronic-illness':     { feverShift: 0.15, feverBoost: 10, infectionBoost: 10, heatBoost: 5  },
        'post-surgery':        { feverShift: 0.1,  feverBoost: 5,  infectionBoost: 20, heatBoost: 0  },
        'pregnancy':           { feverShift: 0.2,  feverBoost: 5,  infectionBoost: 10, heatBoost: 15 },
    };

    /**
     * Calculate fever, infection risk, and heat stress probabilities.
     * Uses a sigmoid-based approach anchored to subject-specific thresholds,
     * with condition-aware modifiers that shift midpoints and boost probabilities.
     * @param {number} temperature - Current measured temperature (°C)
     * @param {string} subjectType - e.g. 'human-adult', 'animal-dog'
     * @param {Array} history - Array of measurement records
     * @param {Object} trend - Trend analysis result from TrendAnalyzer
     * @param {string} conditions - Patient condition (e.g. 'immune-compromised')
     * @returns {Object} { fever, infection, heatStress } each 0-100
     */
    static calculate(temperature, subjectType, history = [], trend = {}, conditions = 'none') {
        const thresholds = CONFIG.riskThresholds[subjectType];
        if (!thresholds) return { fever: 0, infection: 0, heatStress: 0 };

        const mod = this.CONDITION_MODIFIERS[conditions] || this.CONDITION_MODIFIERS['none'];

        // Map new 3-zone thresholds to probability sigmoid anchors
        const normalHigh = thresholds.warningStart;   // e.g. 37.0 for adults
        const mildHigh   = thresholds.feverStart;      // e.g. 38.0
        const modHigh    = thresholds.feverStart + 0.5; // e.g. 38.5 (half deg above fever)
        const highHigh   = thresholds.feverStart + 1.5; // e.g. 39.5 (1.5 deg above fever)
        const baseline   = thresholds.baseline;         // e.g. 36.6

        // ────────────────────────────────────────────
        // 1. PROBABILITY OF FEVER
        //    Sigmoid centered at the mild/normal boundary
        //    Condition shift lowers the midpoint → triggers earlier
        // ────────────────────────────────────────────
        let fever = this._sigmoid(temperature, normalHigh - mod.feverShift, 1.8);

        // Boost if temperature is well above moderate
        if (temperature > modHigh) {
            fever = Math.min(99, fever + (temperature - modHigh) * 8);
        }

        // History trend boost: sustained elevation
        if (history.length >= 3) {
            const last3 = history.slice(-3);
            const allAboveNormal = last3.every(r => r.temperature > normalHigh);
            if (allAboveNormal) fever = Math.min(99, fever + 8);
        }

        // Condition boost
        fever = Math.min(99, fever + mod.feverBoost);

        // ────────────────────────────────────────────
        // 2. PROBABILITY OF INFECTION RISK
        //    Requires sustained or rising fever pattern
        //    Condition boost increases base risk (e.g. post-surgery +20%)
        // ────────────────────────────────────────────
        let infection = 0;

        // Base: mild sigmoid above normal
        if (temperature > normalHigh - mod.feverShift) {
            infection = this._sigmoid(temperature, mildHigh - mod.feverShift, 1.2) * 0.6;
        }

        // Trend multiplier
        if (trend.trend === 'rapid-rise') {
            infection = Math.min(95, infection + 35);
        } else if (trend.trend === 'slow-rise') {
            infection = Math.min(90, infection + 45);
        } else if (trend.trend === 'rising') {
            infection = Math.min(80, infection + 15);
        }

        // Sustained elevation over multiple readings
        if (history.length >= 4) {
            const last4 = history.slice(-4);
            const sustainedFever = last4.every(r => r.temperature > mildHigh);
            if (sustainedFever) infection = Math.min(95, infection + 25);
        }

        // Recovery dampens infection
        if (trend.trend === 'recovery' || trend.trend === 'declining') {
            infection = Math.max(0, infection - 20);
        }

        // Condition boost
        infection = Math.min(99, infection + mod.infectionBoost);

        // ────────────────────────────────────────────
        // 3. PROBABILITY OF HEAT STRESS
        //    Condition boost (e.g. pregnancy +15%)
        // ────────────────────────────────────────────
        let heatStress = 0;

        // Sigmoid: starts rising above moderate threshold
        if (temperature > modHigh) {
            heatStress = this._sigmoid(temperature, highHigh, 2.0) * 0.7;
        } else if (temperature > mildHigh) {
            heatStress = this._sigmoid(temperature, modHigh, 1.0) * 0.3;
        }

        // Rapid rise without gradual pattern → heat stress indicator
        if (trend.trend === 'rapid-rise') {
            heatStress = Math.min(90, heatStress + 30);
        }

        // Very high temperature
        if (temperature > highHigh) {
            heatStress = Math.min(95, heatStress + 25);
        }

        // Animals are more susceptible to heat stress
        if (subjectType.startsWith('animal') && temperature > normalHigh) {
            heatStress = Math.min(95, heatStress + 10);
        }

        // If there's a clear slow-rise (infection-like) pattern, dampen heat stress
        if (trend.trend === 'slow-rise') {
            heatStress = Math.max(0, heatStress - 15);
        }

        // Recovery dampens heat stress
        if (trend.trend === 'recovery' || trend.trend === 'declining') {
            heatStress = Math.max(0, heatStress - 15);
        }

        // Condition boost
        heatStress = Math.min(99, heatStress + mod.heatBoost);

        // Below normal = no fever/infection/heat stress
        if (temperature < thresholds.normalLow) {
            fever = Math.max(0, Math.min(5, fever));
            infection = Math.max(0, Math.min(3, infection));
            heatStress = 0;
        }

        return {
            fever:      Math.round(Math.max(0, Math.min(99, fever))),
            infection:  Math.round(Math.max(0, Math.min(99, infection))),
            heatStress: Math.round(Math.max(0, Math.min(99, heatStress))),
        };
    }

    /**
     * Sigmoid function: returns 0–100 centered at `midpoint`
     * @param {number} x - input value
     * @param {number} midpoint - temperature at which output = 50%
     * @param {number} steepness - controls how sharp the transition is
     */
    static _sigmoid(x, midpoint, steepness) {
        const z = (x - midpoint) * steepness;
        return 100 / (1 + Math.exp(-z));
    }

    /**
     * Update the probability display in the UI
     */
    static updateDisplay(probabilities) {
        const card = document.getElementById('probability-card');
        if (!card) return;
        card.style.display = 'block';

        this._updateBar('fever', probabilities.fever);
        this._updateBar('infection', probabilities.infection);
        this._updateBar('heatstress', probabilities.heatStress);
    }

    static _updateBar(key, value) {
        const bar  = document.getElementById(`prob-${key}-bar`);
        const val  = document.getElementById(`prob-${key}-value`);
        const item = document.getElementById(`prob-${key}-item`);
        if (!bar || !val) return;

        bar.style.width = `${value}%`;
        val.textContent = `${value}%`;

        // Color coding
        bar.className = 'prob-bar-fill';
        if (item) {
            item.classList.remove('prob-elevated', 'prob-high');
        }

        if (value < 15) {
            bar.classList.add('prob-bar-low');
        } else if (value < 40) {
            bar.classList.add('prob-bar-moderate');
        } else if (value < 65) {
            bar.classList.add('prob-bar-elevated');
            if (item) item.classList.add('prob-elevated');
        } else {
            bar.classList.add('prob-bar-high');
            if (item) item.classList.add('prob-high');
        }
    }
}

// ======================= ALARM SYSTEM =========================
/**
 * Simplified 3-level alarm aligned with the 3-zone risk model:
 *   - Normal (level 0): no alarm
 *   - Warning (level 1): alarm ONLY after 2 consecutive readings in warning range
 *   - Fever (level 2): alarm + assistance options immediately
 *
 * Condition offsets are handled by RiskAssessor — the risk level passed in
 * already accounts for condition-based threshold shifts.
 */
class AlarmSystem {
    static _silenced = false;
    static _acknowledged = false;
    static _audioContext = null;
    static _oscillator = null;
    /** How many consecutive readings fall in the Warning zone (level 1) */
    static _consecutiveWarnings = 0;

    /**
     * Check if an alarm should be triggered.
     * @param {number} riskLevel - 0 (Normal), 1 (Warning), 2 (Fever)
     * @param {number} temperature - measured temperature °C
     * @param {Object} trend - trend analysis result
     */
    static check(riskLevel, temperature, trend = {}) {
        if (this._acknowledged) return;

        const banner = document.getElementById('alarm-banner');
        if (!banner) return;

        // Track consecutive warnings (2-consecutive rule)
        if (riskLevel === 1) {
            this._consecutiveWarnings++;
        } else {
            this._consecutiveWarnings = 0;
        }

        let shouldAlarm = false;
        let alarmLevel = '';
        let message = '';

        // ── FEVER (level 2) → immediate alarm + assistance ──
        if (riskLevel === 2) {
            shouldAlarm = true;
            if (trend.trend === 'rapid-rise') {
                alarmLevel = 'critical';
                message = I18n.t('alarm.feverRapid', { temp: temperature.toFixed(1) });
            } else {
                alarmLevel = 'high';
                message = I18n.t('alarm.fever', { temp: temperature.toFixed(1) });
            }
        }
        // ── WARNING (level 1) → only after 2 consecutive readings ──
        else if (riskLevel === 1 && this._consecutiveWarnings >= 2) {
            shouldAlarm = true;
            alarmLevel = 'moderate';
            message = I18n.t('alarm.warningConsecutive', { temp: temperature.toFixed(1) });
        }

        if (shouldAlarm) {
            this.show(banner, alarmLevel, message, temperature);
        } else {
            this.hide(banner);
        }
    }

    static show(banner, level, message, temperature) {
        banner.style.display = 'flex';

        const titleEl = document.getElementById('alarm-title');
        const msgEl = document.getElementById('alarm-message');
        const valEl = document.getElementById('alarm-value');

        if (titleEl) titleEl.textContent = I18n.t('alarm.title');
        if (msgEl) msgEl.textContent = message;
        if (valEl) valEl.textContent = `${temperature.toFixed(1)}\u00B0C`;

        // Play alarm sound (if not silenced)
        if (!this._silenced) {
            this.playAlarmSound();
        }
    }

    static hide(banner) {
        if (banner) banner.style.display = 'none';
        this.stopAlarmSound();
    }

    static acknowledge() {
        this._acknowledged = true;
        const banner = document.getElementById('alarm-banner');
        this.hide(banner);
        // Reset acknowledgment after 10 minutes so it can alarm again
        setTimeout(() => { this._acknowledged = false; }, 10 * 60 * 1000);
    }

    static silence() {
        this._silenced = true;
        this.stopAlarmSound();
        // Un-silence after 5 minutes
        setTimeout(() => { this._silenced = false; }, 5 * 60 * 1000);
    }

    static playAlarmSound() {
        try {
            if (!this._audioContext) {
                this._audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            this.stopAlarmSound();

            const ctx = this._audioContext;
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'sine';
            osc.frequency.value = 880; // A5 note
            gain.gain.value = 0.15;
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            this._oscillator = osc;

            // Beep pattern: beep for 200ms, silence for 300ms, repeat 3 times
            let beepCount = 0;
            const beepInterval = setInterval(() => {
                if (beepCount >= 6) {
                    clearInterval(beepInterval);
                    this.stopAlarmSound();
                    return;
                }
                if (beepCount % 2 === 0) {
                    gain.gain.value = 0.15;
                } else {
                    gain.gain.value = 0;
                }
                beepCount++;
            }, 250);
        } catch (e) {
            // Audio not supported - that's OK
        }
    }

    static stopAlarmSound() {
        if (this._oscillator) {
            try { this._oscillator.stop(); } catch(e) {}
            this._oscillator = null;
        }
    }

    static bindEvents() {
        document.getElementById('alarm-acknowledge')?.addEventListener('click', () => this.acknowledge());
        document.getElementById('alarm-silence')?.addEventListener('click', () => this.silence());
    }
}

// ======================= HEALTH INSIGHTS ENGINE =========================
class HealthInsights {
    /**
     * Update all health insight panels based on current data.
     */
    static update(temperature, subjectType, history, trend) {
        const section = document.getElementById('insights-section');
        if (!section || history.length < 1) return;

        section.style.display = 'block';
        section.classList.add('fade-in');

        this.updateCircadian(history);
        this.updateStability(history);
        this.updateTrajectory(history, trend);
        this.updateDeviation(temperature, subjectType);
    }

    /**
     * Circadian Rhythm Analysis — looks for time-of-day patterns.
     */
    static updateCircadian(history) {
        const el = document.getElementById('circadian-content');
        if (!el || history.length < 3) return;

        const hours = history.map(r => ({
            hour: new Date(r.timestamp).getHours(),
            temp: r.temperature
        }));

        // Group by time blocks: Morning (6-12), Afternoon (12-18), Evening (18-24), Night (0-6)
        const blocks = { morning: [], afternoon: [], evening: [], night: [] };
        hours.forEach(h => {
            if (h.hour >= 6 && h.hour < 12) blocks.morning.push(h.temp);
            else if (h.hour >= 12 && h.hour < 18) blocks.afternoon.push(h.temp);
            else if (h.hour >= 18) blocks.evening.push(h.temp);
            else blocks.night.push(h.temp);
        });

        const avg = arr => arr.length > 0 ? (arr.reduce((a, b) => a + b, 0) / arr.length) : null;

        const blockAvgs = {
            [I18n.t('insights.morning')]: avg(blocks.morning),
            [I18n.t('insights.afternoon')]: avg(blocks.afternoon),
            [I18n.t('insights.evening')]: avg(blocks.evening),
            [I18n.t('insights.night')]: avg(blocks.night),
        };

        let html = '<div class="circadian-grid">';
        for (const [label, val] of Object.entries(blockAvgs)) {
            if (val !== null) {
                html += `<div class="circadian-block">
                    <span class="circadian-label">${label}</span>
                    <span class="circadian-value">${val.toFixed(1)}\u00B0C</span>
                </div>`;
            }
        }
        html += '</div>';

        if (Object.values(blockAvgs).filter(v => v !== null).length < 2) {
            el.innerHTML = `<p class="insight-placeholder">${I18n.t('insights.needMore')}</p>`;
        } else {
            el.innerHTML = html;
        }
    }

    /**
     * Thermal Stability Index — coefficient of variation of recent readings.
     */
    static updateStability(history) {
        const bar = document.getElementById('stability-bar');
        const val = document.getElementById('stability-value');
        if (!bar || !val || history.length < 2) return;

        const recent = history.slice(-10); // Last 10 readings
        const temps = recent.map(r => r.temperature);
        const mean = temps.reduce((a, b) => a + b, 0) / temps.length;
        const variance = temps.reduce((sum, t) => sum + Math.pow(t - mean, 2), 0) / temps.length;
        const stdDev = Math.sqrt(variance);

        // Stability score: 100 = perfectly stable, 0 = very unstable
        // StdDev of 0 → 100, StdDev of 1+ → ~0
        const stability = Math.max(0, Math.min(100, 100 * Math.exp(-2 * stdDev)));

        bar.style.width = `${stability}%`;

        if (stability > 80) {
            val.textContent = `${stability.toFixed(0)}% — ${I18n.t('insights.veryStable')}`;
        } else if (stability > 50) {
            val.textContent = `${stability.toFixed(0)}% — ${I18n.t('insights.moderatelyStable')}`;
        } else {
            val.textContent = `${stability.toFixed(0)}% — ${I18n.t('insights.fluctuating')}`;
        }
    }

    /**
     * Health Trajectory — improving, stable, or worsening.
     */
    static updateTrajectory(history, trend) {
        const el = document.getElementById('trajectory-content');
        if (!el || history.length < 3) return;

        const recent = history.slice(-5);
        const first = recent[0].temperature;
        const last = recent[recent.length - 1].temperature;
        const diff = last - first;

        let statusClass, icon, label;
        if (diff < -0.3) {
            statusClass = 'trajectory-improving';
            icon = 'trending_down';
            label = I18n.t('insights.improving');
        } else if (diff > 0.3) {
            statusClass = 'trajectory-worsening';
            icon = 'trending_up';
            label = I18n.t('insights.worsening');
        } else {
            statusClass = 'trajectory-stable';
            icon = 'trending_flat';
            label = I18n.t('insights.stableTrajectory');
        }

        el.innerHTML = `
            <div class="trajectory-status ${statusClass}">
                <span class="material-symbols-outlined">${icon}</span>
                <span>${label}</span>
            </div>
            <p style="margin-top:0.5rem;font-size:0.8rem;color:var(--text-muted);">
                ${I18n.t('insights.trajectoryDetail', {
                    change: (diff >= 0 ? '+' : '') + diff.toFixed(2),
                    count: recent.length
                })}
            </p>`;
    }

    /**
     * Baseline Deviation — how far from the expected baseline.
     */
    static updateDeviation(temperature, subjectType) {
        const valEl = document.getElementById('deviation-value');
        const descEl = document.getElementById('deviation-desc');
        if (!valEl || !descEl) return;

        const thresholds = CONFIG.riskThresholds[subjectType];
        if (!thresholds) return;

        const baseline = thresholds.baseline;
        const deviation = temperature - baseline;

        valEl.textContent = `${deviation >= 0 ? '+' : ''}${deviation.toFixed(2)}\u00B0C`;
        valEl.className = 'deviation-value ' + (deviation > 0.5 ? 'positive' : deviation < -0.5 ? 'negative' : 'neutral');

        if (Math.abs(deviation) < 0.3) {
            descEl.textContent = I18n.t('insights.withinBaseline');
        } else if (deviation > 0) {
            descEl.textContent = I18n.t('insights.aboveBaseline', { deg: deviation.toFixed(1) });
        } else {
            descEl.textContent = I18n.t('insights.belowBaseline', { deg: Math.abs(deviation).toFixed(1) });
        }
    }
}

// ======================= TREND ANALYZER =========================
class TrendAnalyzer {
    /** Condition-based reduction of rise thresholds (°C less temp needed to trigger) */
    static CONDITION_RISE_OFFSETS = {
        'none':               0,
        'immune-compromised': 0.5,
        'chronic-illness':    0.3,
        'post-surgery':       0.3,
        'pregnancy':          0.3,
    };

    static analyze(history, conditions = 'none') {
        if (history.length < 2) {
            return { trend: 'insufficient', message: 'Need more readings for trend analysis.' };
        }

        const latest = history[history.length - 1];
        const previous = history[history.length - 2];
        const change = latest.temperature - previous.temperature;
        const timeDiff = latest.timestamp - previous.timestamp;

        const result = {
            change: change,
            timeDiff: timeDiff,
            trend: 'stable',
            alerts: [],
        };

        // Condition-adjusted rise thresholds (lower for at-risk patients)
        const riseOffset = this.CONDITION_RISE_OFFSETS[conditions] || 0;
        const rapidThreshold = CONFIG.rapidRise.tempIncrease - riseOffset;
        const slowThreshold  = CONFIG.slowRise.tempIncrease  - riseOffset;

        // Check rapid rise
        const rapidWindow = CONFIG.rapidRise.timeWindow;
        const recentReadings = history.filter(r => (latest.timestamp - r.timestamp) <= rapidWindow);
        if (recentReadings.length >= 2) {
            const oldest = recentReadings[0];
            const tempRise = latest.temperature - oldest.temperature;
            const timeSpan = latest.timestamp - oldest.timestamp;

            if (tempRise >= rapidThreshold && timeSpan <= rapidWindow) {
                result.trend = 'rapid-rise';
                result.alerts.push({
                    type: 'rapid',
                    title: I18n.t('trend.rapidTitle'),
                    message: I18n.t('trend.rapidMsg', { rise: tempRise.toFixed(1), hours: (timeSpan / 3600000).toFixed(1) }),
                });
            }
        }

        // Check slow rise
        const slowWindow = CONFIG.slowRise.timeWindow;
        const extendedReadings = history.filter(r => (latest.timestamp - r.timestamp) <= slowWindow);
        if (extendedReadings.length >= 2 && result.trend !== 'rapid-rise') {
            const oldest = extendedReadings[0];
            const tempRise = latest.temperature - oldest.temperature;
            const timeSpan = latest.timestamp - oldest.timestamp;

            if (tempRise >= slowThreshold && timeSpan > rapidWindow) {
                result.trend = 'slow-rise';
                result.alerts.push({
                    type: 'slow',
                    title: I18n.t('trend.slowTitle'),
                    message: I18n.t('trend.slowMsg', { rise: tempRise.toFixed(1), hours: (timeSpan / 3600000).toFixed(1) }),
                });
            }
        }

        // Check recovery
        if (result.trend === 'stable') {
            const recent = history.slice(-CONFIG.recoveryConsecutive);
            if (recent.length >= CONFIG.recoveryConsecutive) {
                const allNormal = recent.every(r => r.riskLevel <= 0);
                const wasFeverBefore = history.slice(0, -CONFIG.recoveryConsecutive).some(r => r.riskLevel >= 2);
                if (allNormal && wasFeverBefore) {
                    result.trend = 'recovery';
                    result.alerts.push({
                        type: 'recovery',
                        title: I18n.t('trend.recoveryTitle'),
                        message: I18n.t('trend.recoveryMsg', { count: CONFIG.recoveryConsecutive }),
                    });
                }
            }
        }

        // Determine general trend direction
        if (result.trend === 'stable' && Math.abs(change) >= 0.2) {
            result.trend = change > 0 ? 'rising' : 'declining';
        }

        return result;
    }
}

// ======================= AI RECOMMENDATION ENGINE ===============
class AIRecommendationEngine {
    /**
     * Think-Analyze-Decide framework
     * Generates contextual health recommendations
     */
    static generate(data) {
        const { temperature, riskLevel, subjectType, trend, history, conditions } = data;

        // ROUND 1: THINK — Gather context
        const think = this.thinkPhase(data);

        // ROUND 2: ANALYZE — Classify risk
        const analyze = this.analyzePhase(data);

        // ROUND 3: DECIDE — Generate recommendations
        const decide = this.decidePhase(data);

        return { think, analyze, decide };
    }

    static thinkPhase(data) {
        const { temperature, subjectType, conditions, history } = data;
        const thresholds = CONFIG.riskThresholds[subjectType];
        const labels = {
            'human-adult': I18n.t('ai.subject.humanAdult'),
            'human-elderly': I18n.t('ai.subject.humanElderly'),
            'human-infant': I18n.t('ai.subject.humanInfant'),
            'human-child': I18n.t('ai.subject.humanChild'),
            'animal-dog': I18n.t('ai.subject.animalDog'),
            'animal-cat': I18n.t('ai.subject.animalCat'),
        };

        const baselineStr = thresholds ? `${thresholds.normalLow}\u2013${thresholds.warningStart}\u00B0C` : 'N/A';
        const histCount = history ? history.length : 0;
        const conditionStr = conditions !== 'none' ? I18n.t('ai.cond.' + conditions) : I18n.t('ai.cond.none');

        return {
            summary: `${I18n.t('ai.thinkSubject')}: ${labels[subjectType] || subjectType}. ` +
                `${I18n.t('ai.thinkRange')}: ${baselineStr}. ` +
                `${I18n.t('ai.thinkCurrent')}: ${temperature.toFixed(1)}\u00B0C. ` +
                `${I18n.t('ai.thinkHistory')}: ${histCount}. ` +
                `${I18n.t('ai.thinkConditions')}: ${conditionStr}.`,
        };
    }

    static analyzePhase(data) {
        const { temperature, riskLevel, trend, subjectType, conditions } = data;
        const isAnimal = subjectType.startsWith('animal');
        const hasConditions = conditions !== 'none';

        let analysis = '';
        const levelNames = [
            I18n.t('risk.normal'),
            I18n.t('risk.warning'),
            I18n.t('risk.fever'),
        ];

        analysis = `${I18n.t('ai.classification')}: ${levelNames[riskLevel.level] || I18n.t('ai.level.unknown')}. `;

        if (trend.trend === 'rapid-rise') {
            analysis += I18n.t('ai.trend.rapidRise') + ' ';
        } else if (trend.trend === 'slow-rise') {
            analysis += I18n.t('ai.trend.slowRise') + ' ';
        } else if (trend.trend === 'recovery') {
            analysis += I18n.t('ai.trend.recovery') + ' ';
        } else if (trend.trend === 'rising') {
            analysis += I18n.t('ai.trend.rising') + ' ';
        } else if (trend.trend === 'declining') {
            analysis += I18n.t('ai.trend.declining') + ' ';
        }

        if (hasConditions) {
            analysis += I18n.t('ai.conditionsNote', { cond: I18n.t('ai.cond.' + conditions) }) + ' ';
        }

        return { summary: analysis };
    }

    static decidePhase(data) {
        const { temperature, riskLevel, trend, subjectType, conditions } = data;
        const isAnimal = subjectType.startsWith('animal');
        const hasConditions = conditions !== 'none';
        const level = riskLevel.level;
        const t = temperature.toFixed(1);

        let recommendations = [];
        let actions = [];
        let icon = 'Rx';
        let title = I18n.t('ai.rec.title');

        // Generate recommendations based on level and subject
        if (isAnimal) {
            ({ recommendations, actions, icon, title } = this.animalRecommendations(level, trend, subjectType, t));
        } else {
            ({ recommendations, actions, icon, title } = this.humanRecommendations(level, trend, subjectType, t, hasConditions));
        }

        // Add condition-specific advice tailored to the actual condition AND subject type
        // Uses new 3-level system: 0 = Normal, 1 = Warning, 2 = Fever
        if (hasConditions) {
            const condMap = {
                'immune-compromised': 'immune',
                'chronic-illness':    'chronic',
                'post-surgery':       'surgery',
                'pregnancy':          'pregnancy',
            };
            const condKey = condMap[conditions];
            if (condKey) {
                const levelKey = level >= 2 ? 'fever' : level >= 1 ? 'warning' : 'normal';
                // Determine subject sub-key for condition advice
                const subKey = isAnimal
                    ? (subjectType === 'animal-dog' ? 'dog' : 'cat')
                    : subjectType === 'human-infant' ? 'infant'
                    : subjectType === 'human-child' ? 'child'
                    : subjectType === 'human-elderly' ? 'elderly'
                    : 'adult';

                // Try subject-specific condition key first, fall back to generic
                const specificKey = `ai.rec.cond.${condKey}.${levelKey}.${subKey}`;
                const genericKey  = `ai.rec.cond.${condKey}.${levelKey}`;
                const specificText = I18n.t(specificKey);
                // If specific key resolves (not just returning the key string), use it
                recommendations.push(specificText !== specificKey ? specificText : I18n.t(genericKey));
            }
        }

        // Rapid rise specific
        if (trend.trend === 'rapid-rise') {
            icon = '\u26A0';
            title = I18n.t('ai.rec.urgentRapid');
            if (!isAnimal) {
                recommendations.unshift(I18n.t('ai.rec.criticalRapidHuman'));
                actions = [
                    { label: I18n.t('ai.act.seekImmediate'), class: 'action-critical' },
                    { label: I18n.t('ai.act.callEmergency40'), class: 'action-urgent' },
                ];
            } else {
                recommendations.unshift(I18n.t('ai.rec.criticalRapidAnimal'));
                actions = [
                    { label: I18n.t('ai.act.emergencyVet'), class: 'action-critical' },
                    { label: I18n.t('ai.act.beginCooling'), class: 'action-urgent' },
                ];
            }
        }

        return { recommendations, actions, icon, title };
    }

    /**
     * Human recommendations — simplified 3-level system:
     *   Level 0: Normal → reassurance
     *   Level 1: Warning (37–38 °C) → monitor, hydrate, rest
     *   Level 2: Fever  (≥ 38 °C) → seek medical attention, medication
     */
    static humanRecommendations(level, trend, subjectType, t, hasConditions) {
        const isElderly = subjectType === 'human-elderly';
        const isInfant = subjectType === 'human-infant';
        const isChild = subjectType === 'human-child';
        const subKey = isInfant ? 'infant' : isChild ? 'child' : isElderly ? 'elderly' : 'adult';

        let recommendations = [];
        let actions = [];
        let icon = 'Rx';
        let title = I18n.t('ai.rec.title');

        switch (level) {
            case 0: // ── NORMAL ──
                icon = '\u2713';
                title = I18n.t('ai.rec.h.normalTitle');
                recommendations = [
                    I18n.t('ai.rec.h.normal1', { t }),
                    I18n.t('ai.rec.h.normal2'),
                    I18n.t('ai.rec.h.normal3'),
                ];
                actions = [
                    { label: I18n.t('ai.act.continueMonitor'), class: 'action-ok' },
                ];
                break;
            case 1: // ── WARNING (37–38 °C) ──
                icon = '\u25B2';
                title = I18n.t('ai.rec.h.warningTitle');
                recommendations = [
                    I18n.t('ai.rec.h.warn1', { t }),
                    I18n.t('ai.rec.h.warn2'),
                    I18n.t('ai.rec.h.warn3'),
                    I18n.t('ai.rec.h.warn4.' + subKey),
                ];
                actions = [
                    { label: I18n.t('ai.act.hydrate'), class: 'action-ok' },
                    { label: I18n.t('ai.act.remeasure1h'), class: 'action-caution' },
                    { label: I18n.t('ai.act.rest'), class: 'action-ok' },
                ];
                break;
            case 2: // ── FEVER (≥ 38 °C) ──
            default:
                icon = '\u26A0';
                title = I18n.t('ai.rec.h.feverTitle');
                recommendations = [
                    I18n.t('ai.rec.h.fever1', { t }),
                    I18n.t('ai.rec.h.fever2'),
                    I18n.t('ai.rec.h.fever3'),
                    I18n.t('ai.rec.h.fever4'),
                    I18n.t('ai.rec.h.fever5.' + subKey),
                    I18n.t('ai.rec.h.fever6'),
                ];
                actions = [
                    { label: I18n.t('ai.act.seekMedical'), class: 'action-urgent' },
                    { label: I18n.t('ai.act.adminFeverRed'), class: 'action-warning' },
                    { label: I18n.t('ai.act.coolCompress'), class: 'action-caution' },
                ];
                break;
        }

        return { recommendations, actions, icon, title };
    }

    /**
     * Animal recommendations — simplified 3-level system
     */
    static animalRecommendations(level, trend, subjectType, t) {
        const animalKey = subjectType === 'animal-dog' ? 'dog' : 'cat';
        const animalName = I18n.t('ai.animal.' + animalKey);
        let recommendations = [];
        let actions = [];
        let icon = '\u2022';
        let title = I18n.t('ai.rec.a.petTitle', { animal: animalName });

        switch (level) {
            case 0: // ── NORMAL ──
                icon = '\u2713';
                title = I18n.t('ai.rec.a.normalTitle', { animal: animalName });
                recommendations = [
                    I18n.t('ai.rec.a.normal1', { animal: animalName, t }),
                    I18n.t('ai.rec.a.normal2'),
                    I18n.t('ai.rec.a.normal3'),
                ];
                actions = [
                    { label: I18n.t('ai.act.continueMonitor'), class: 'action-ok' },
                ];
                break;
            case 1: // ── WARNING ──
                icon = '\u25B2';
                title = I18n.t('ai.rec.a.warningTitle', { animal: animalName });
                recommendations = [
                    I18n.t('ai.rec.a.warn1', { animal: animalName, t }),
                    I18n.t('ai.rec.a.warn2'),
                    I18n.t('ai.rec.a.warn3', { animal: animalName }),
                    I18n.t('ai.rec.a.warn4'),
                ];
                actions = [
                    { label: I18n.t('ai.act.ensureWater'), class: 'action-ok' },
                    { label: I18n.t('ai.act.recheck1h'), class: 'action-caution' },
                ];
                break;
            case 2: // ── FEVER ──
            default:
                icon = '\u26A0';
                title = I18n.t('ai.rec.a.feverTitle', { animal: animalName });
                recommendations = [
                    I18n.t('ai.rec.a.fever1', { animal: animalName, t }),
                    I18n.t('ai.rec.a.fever2'),
                    I18n.t('ai.rec.a.fever3'),
                    I18n.t('ai.rec.a.fever4'),
                    I18n.t('ai.rec.a.fever5', { animal: animalName }),
                ];
                actions = [
                    { label: I18n.t('ai.act.immediateVet'), class: 'action-urgent' },
                    { label: I18n.t('ai.act.beginCooling'), class: 'action-caution' },
                ];
                break;
        }

        return { recommendations, actions, icon, title };
    }
}

// ======================= LLM ENGINE (Cloud AI via Flask API) ======
/**
 * LLMEngine — Connects to a Flask API backed by a free cloud LLM (Groq/Llama).
 * Falls back to the rule-based AIRecommendationEngine if the API is unavailable.
 *
 * Architecture:
 *   Website → Flask API (PythonAnywhere) → Groq (Llama 3) → personalized advice
 */
class LLMEngine {
    static API_URL = '';          // Set by user in settings
    static enabled = false;       // Toggle in settings
    static lastResponse = null;
    static _timeout = 8000;       // 8s timeout

    /** Initialize from localStorage */
    static init() {
        const saved = localStorage.getItem('hpc_llm_settings');
        if (saved) {
            try {
                const s = JSON.parse(saved);
                this.API_URL = s.apiUrl || '';
                this.enabled = !!s.enabled;
            } catch (_) { /* ignore */ }
        }
        this._bindUI();
    }

    /** Bind settings UI events */
    static _bindUI() {
        const toggle = document.getElementById('llm-toggle');
        const urlInput = document.getElementById('llm-api-url');
        const testBtn = document.getElementById('llm-test-btn');
        const status = document.getElementById('llm-status');

        if (toggle) {
            toggle.checked = this.enabled;
            toggle.addEventListener('change', () => {
                this.enabled = toggle.checked;
                this._save();
                this._updateStatusUI();
            });
        }
        if (urlInput) {
            urlInput.value = this.API_URL;
            urlInput.addEventListener('change', () => {
                this.API_URL = urlInput.value.trim().replace(/\/+$/, '');
                this._save();
            });
        }
        if (testBtn) {
            testBtn.addEventListener('click', () => this.testConnection());
        }
        this._updateStatusUI();
    }

    /** Save settings to localStorage */
    static _save() {
        localStorage.setItem('hpc_llm_settings', JSON.stringify({
            apiUrl: this.API_URL,
            enabled: this.enabled,
        }));
    }

    /** Update the status indicator in UI */
    static _updateStatusUI() {
        const status = document.getElementById('llm-status');
        const badge = document.getElementById('llm-badge');
        if (status) {
            if (!this.enabled) {
                status.className = 'llm-status-dot off';
                status.title = I18n.t('llm.status.off');
            } else if (!this.API_URL) {
                status.className = 'llm-status-dot warn';
                status.title = I18n.t('llm.status.noUrl');
            } else {
                status.className = 'llm-status-dot on';
                status.title = I18n.t('llm.status.ready');
            }
        }
        if (badge) {
            badge.style.display = (this.enabled && this.API_URL) ? 'inline-flex' : 'none';
        }
    }

    /**
     * Test connection to the Flask API.
     */
    static async testConnection() {
        const status = document.getElementById('llm-test-result');
        if (!status) return;

        if (!this.API_URL) {
            status.textContent = I18n.t('llm.test.noUrl');
            status.className = 'llm-test-result error';
            return;
        }

        status.textContent = I18n.t('llm.test.testing');
        status.className = 'llm-test-result testing';

        try {
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), this._timeout);

            const res = await fetch(this.API_URL, {
                method: 'GET',
                signal: controller.signal,
            });
            clearTimeout(timer);

            if (res.ok) {
                const data = await res.json();
                status.textContent = `✓ ${I18n.t('llm.test.success')} (${data.model || 'LLM'})`;
                status.className = 'llm-test-result success';
            } else {
                status.textContent = `✗ ${I18n.t('llm.test.fail')} (${res.status})`;
                status.className = 'llm-test-result error';
            }
        } catch (err) {
            status.textContent = `✗ ${I18n.t('llm.test.fail')} (${err.message})`;
            status.className = 'llm-test-result error';
        }
    }

    /**
     * Request LLM recommendation. Returns null if unavailable (triggers fallback).
     * @param {Object} data - Same shape as AIRecommendationEngine.generate() input
     * @returns {Object|null} LLM result or null for fallback
     */
    static async getRecommendation(data) {
        if (!this.enabled || !this.API_URL) return null;

        const { temperature, riskLevel, subjectType, trend, history, conditions } = data;
        const lang = (typeof I18n !== 'undefined') ? I18n.currentLang : 'en';
        const patientName = (document.getElementById('subject-name')?.value || '').trim();

        // Get current probabilities if available
        let probabilities = {};
        const feverEl = document.getElementById('prob-fever-value');
        const infEl = document.getElementById('prob-infection-value');
        const heatEl = document.getElementById('prob-heat-value');
        if (feverEl) probabilities.fever = parseFloat(feverEl.textContent) || 0;
        if (infEl) probabilities.infection = parseFloat(infEl.textContent) || 0;
        if (heatEl) probabilities.heatStress = parseFloat(heatEl.textContent) || 0;

        const payload = {
            temperature,
            subjectType,
            conditions: conditions || 'none',
            trend: trend?.trend || 'stable',
            riskLevel: riskLevel?.level ?? 0,
            historyCount: history?.length || 0,
            patientName,
            probabilities,
            language: lang,
        };

        try {
            const controller = new AbortController();
            const timer = setTimeout(() => controller.abort(), this._timeout);

            const res = await fetch(`${this.API_URL}/api/recommend`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal,
            });
            clearTimeout(timer);

            if (!res.ok) return null;

            const json = await res.json();
            if (!json.success) return null;

            this.lastResponse = json;

            // Convert LLM response to the same format as AIRecommendationEngine
            const llmData = json.data;
            return {
                source: 'llm',
                model: json.model || 'LLM',
                think: {
                    summary: `🤖 ${I18n.t('llm.source')}: ${json.model || 'AI'} — ` +
                        `${I18n.t('ai.thinkSubject')}: ${subjectType}, ` +
                        `${I18n.t('ai.thinkCurrent')}: ${temperature.toFixed(1)}°C`,
                },
                analyze: {
                    summary: llmData.summary || '',
                },
                decide: {
                    icon: riskLevel.level >= 2 ? '🚨' : riskLevel.level >= 1 ? '⚠️' : '✓',
                    title: I18n.t('llm.aiEnhanced'),
                    recommendations: llmData.recommendations || [],
                    actions: (llmData.actions || []).map(a => ({
                        label: a.label || a,
                        class: a.class || 'action-monitor',
                    })),
                },
            };
        } catch (err) {
            console.warn('[LLMEngine] API call failed, using rule-based fallback:', err.message);
            return null;
        }
    }
}

// ======================= HISTORY MANAGER ========================
class HistoryManager {
    constructor() {
        this.records = [];
        this.load();
    }

    load() {
        const saved = localStorage.getItem('hpc_history');
        if (saved) {
            try {
                this.records = JSON.parse(saved);
            } catch {
                this.records = [];
            }
        }
    }

    save() {
        localStorage.setItem('hpc_history', JSON.stringify(this.records));
    }

    addRecord(record) {
        this.records.push(record);
        this.save();
    }

    getRecords(timeRange = null) {
        if (!timeRange) return this.records;

        const now = Date.now();
        const ranges = { '1h': 3600000, '6h': 6 * 3600000, '24h': 24 * 3600000 };
        const ms = ranges[timeRange];
        if (!ms) return this.records;

        return this.records.filter(r => (now - r.timestamp) <= ms);
    }

    clear() {
        this.records = [];
        this.save();
    }

    getLastRecord() {
        return this.records.length > 0 ? this.records[this.records.length - 1] : null;
    }
}

// ======================= PREDICTION ENGINE (RNN-Based) ===========

/**
 * Feature Extractor — Transforms raw temperature records into feature vectors
 * for prediction models. Features: [temp, rate_of_change, sin_hour, cos_hour, time_delta_hrs]
 */
class FeatureExtractor {
    static extract(records) {
        return records.map((r, i) => {
            const date = new Date(r.timestamp);
            const hour = date.getHours() + date.getMinutes() / 60;
            const sinHour = Math.sin(2 * Math.PI * hour / 24);
            const cosHour = Math.cos(2 * Math.PI * hour / 24);
            const dT = i > 0 ? r.temperature - records[i - 1].temperature : 0;
            const dt = i > 0 ? (r.timestamp - records[i - 1].timestamp) / 3600000 : 0; // hours
            const rate = dt > 0 ? dT / dt : 0; // C per hour
            return [r.temperature, rate, sinHour, cosHour, dt];
        });
    }

    /**
     * Normalize features for LSTM input.
     * Returns { normalized, params } where params stores mean/std for denormalization.
     */
    static normalize(features) {
        const nFeatures = features[0].length;
        const means = new Array(nFeatures).fill(0);
        const stds = new Array(nFeatures).fill(0);
        const n = features.length;

        // Compute means
        for (const row of features) {
            for (let j = 0; j < nFeatures; j++) means[j] += row[j];
        }
        for (let j = 0; j < nFeatures; j++) means[j] /= n;

        // Compute stds
        for (const row of features) {
            for (let j = 0; j < nFeatures; j++) stds[j] += (row[j] - means[j]) ** 2;
        }
        for (let j = 0; j < nFeatures; j++) {
            stds[j] = Math.sqrt(stds[j] / n);
            if (stds[j] < 1e-8) stds[j] = 1; // prevent division by zero
        }

        // Normalize
        const normalized = features.map(row =>
            row.map((val, j) => (val - means[j]) / stds[j])
        );

        return { normalized, params: { means, stds } };
    }
}

/**
 * Linear Predictor — Least-squares linear regression extrapolation.
 * Uses the last N readings to fit a line and project forward.
 */
class LinearPredictor {
    predict(records, horizonMinutes) {
        if (records.length < 2) return null;
        const n = Math.min(records.length, 10);
        const recent = records.slice(-n);
        const t0 = recent[0].timestamp;
        const xs = recent.map(r => (r.timestamp - t0) / 60000); // minutes
        const ys = recent.map(r => r.temperature);

        // Least squares: y = mx + b
        const N = xs.length;
        const sumX = xs.reduce((a, b) => a + b, 0);
        const sumY = ys.reduce((a, b) => a + b, 0);
        const sumXY = xs.reduce((a, x, i) => a + x * ys[i], 0);
        const sumX2 = xs.reduce((a, x) => a + x * x, 0);
        const denom = N * sumX2 - sumX * sumX;
        if (Math.abs(denom) < 1e-10) return horizonMinutes.map(() => ys[ys.length - 1]);

        const slope = (N * sumXY - sumX * sumY) / denom;
        const intercept = (sumY - slope * sumX) / N;
        const lastX = xs[xs.length - 1];

        // Compute residual std for confidence
        const predictions = xs.map(x => intercept + slope * x);
        const residuals = ys.map((y, i) => y - predictions[i]);
        const residStd = Math.sqrt(residuals.reduce((a, r) => a + r * r, 0) / Math.max(1, N - 2));

        return horizonMinutes.map(h => ({
            value: intercept + slope * (lastX + h),
            std: residStd * Math.sqrt(1 + 1 / N + ((lastX + h - sumX / N) ** 2) / (sumX2 - sumX * sumX / N)),
        }));
    }
}

/**
 * Holt Predictor — Double exponential smoothing (Holt's method).
 * Captures level and trend for short-term forecasting.
 */
class HoltPredictor {
    predict(records, horizonMinutes) {
        if (records.length < 3) return null;
        const temps = records.map(r => r.temperature);
        const alpha = 0.6; // level smoothing
        const beta = 0.3;  // trend smoothing

        let level = temps[0];
        let trend = temps.length > 1 ? temps[1] - temps[0] : 0;

        // Track one-step-ahead errors for confidence estimation
        const errors = [];
        for (let i = 1; i < temps.length; i++) {
            const predicted = level + trend;
            errors.push(temps[i] - predicted);
            const newLevel = alpha * temps[i] + (1 - alpha) * (level + trend);
            const newTrend = beta * (newLevel - level) + (1 - beta) * trend;
            level = newLevel;
            trend = newTrend;
        }

        const errorStd = errors.length > 0
            ? Math.sqrt(errors.reduce((a, e) => a + e * e, 0) / errors.length)
            : 0.3;

        // Average time step in minutes
        const avgStep = records.length >= 2
            ? (records[records.length - 1].timestamp - records[0].timestamp) / (60000 * (records.length - 1))
            : 15;

        return horizonMinutes.map(h => {
            const steps = h / Math.max(1, avgStep);
            return {
                value: level + trend * steps,
                std: errorStd * Math.sqrt(steps), // uncertainty grows with horizon
            };
        });
    }
}

/**
 * Physics Predictor — Newton's Law of Cooling / Mean Reversion.
 * Temperature reverts toward a physiological baseline.
 */
class PhysicsPredictor {
    predict(records, horizonMinutes, baseline = 36.6) {
        if (records.length < 2) return null;
        const curr = records[records.length - 1];
        const prev = records[records.length - 2];
        const dt = (curr.timestamp - prev.timestamp) / 60000; // minutes

        if (dt <= 0) return horizonMinutes.map(() => ({ value: curr.temperature, std: 0.5 }));

        const diff = curr.temperature - baseline;
        const prevDiff = prev.temperature - baseline;

        // Estimate decay rate k from last two readings
        let k = 0.002; // default: very slow reversion (~0.12 C/hr)
        if (Math.abs(prevDiff) > 0.05 && Math.abs(diff) > 0.01) {
            const ratio = Math.abs(diff / prevDiff);
            if (ratio > 0 && ratio < 10) {
                const kEst = -Math.log(ratio) / dt;
                k = Math.max(0.0005, Math.min(0.05, kEst));
            }
        }

        // Track prediction errors over history for std estimate
        const errors = [];
        for (let i = 2; i < records.length; i++) {
            const dtI = (records[i].timestamp - records[i - 1].timestamp) / 60000;
            const diffI = records[i - 1].temperature - baseline;
            const predicted = baseline + diffI * Math.exp(-k * dtI);
            errors.push(records[i].temperature - predicted);
        }
        const errorStd = errors.length > 0
            ? Math.sqrt(errors.reduce((a, e) => a + e * e, 0) / errors.length)
            : 0.4;

        return horizonMinutes.map(h => ({
            value: baseline + diff * Math.exp(-k * h),
            std: errorStd * Math.sqrt(h / 15),
        }));
    }
}

/**
 * LSTM Predictor — TensorFlow.js LSTM network with Monte Carlo Dropout.
 * Provides deep-learning-based prediction when enough data is available.
 */
class LSTMPredictor {
    constructor() {
        this.model = null;
        this.isTraining = false;
        this.isTrained = false;
        this.normParams = null;
        this.tempMean = 37;
        this.tempStd = 1;
        this.minRecords = 6; // minimum readings to train
        this.windowSize = 5;
        this.numFeatures = 5;
        this.horizons = [15, 30, 45]; // minutes
    }

    /** Check if TensorFlow.js is available */
    static isAvailable() {
        return typeof tf !== 'undefined';
    }

    /** Build the LSTM model architecture */
    async buildModel() {
        if (!LSTMPredictor.isAvailable()) return;

        const model = tf.sequential();
        model.add(tf.layers.lstm({
            units: 32,
            inputShape: [this.windowSize, this.numFeatures],
            returnSequences: true,
            dropout: 0.2,
            recurrentDropout: 0.1,
        }));
        model.add(tf.layers.lstm({
            units: 16,
            dropout: 0.2,
        }));
        model.add(tf.layers.dense({ units: 8, activation: 'relu' }));
        model.add(tf.layers.dropout({ rate: 0.15 }));
        model.add(tf.layers.dense({ units: 3 })); // predict 3 horizons

        model.compile({
            optimizer: tf.train.adam(0.005),
            loss: 'meanSquaredError',
        });

        this.model = model;
    }

    /**
     * Prepare training data from historical records.
     * Creates sliding windows of features and targets (future temps).
     */
    prepareTrainingData(records) {
        if (records.length < this.windowSize + 3) return null;

        const features = FeatureExtractor.extract(records);
        const { normalized, params } = FeatureExtractor.normalize(features);
        this.normParams = params;
        this.tempMean = params.means[0];
        this.tempStd = params.stds[0];

        const inputs = [];
        const targets = [];

        for (let i = 0; i <= records.length - this.windowSize - 1; i++) {
            const window = normalized.slice(i, i + this.windowSize);
            const lastTimestamp = records[i + this.windowSize - 1].timestamp;

            // Find actual temperatures at +15, +30, +45 min horizons (interpolate)
            const horizonTargets = this.horizons.map(h => {
                const targetTime = lastTimestamp + h * 60000;
                return this.interpolateTemp(records, targetTime);
            });

            // Skip if any horizon target is null (not enough future data)
            if (horizonTargets.some(t => t === null)) continue;

            // Normalize targets
            const normalizedTargets = horizonTargets.map(t => (t - this.tempMean) / this.tempStd);
            inputs.push(window);
            targets.push(normalizedTargets);
        }

        // Data augmentation: add noisy copies
        const augmentedInputs = [...inputs];
        const augmentedTargets = [...targets];
        for (let k = 0; k < 2; k++) { // 2x augmentation
            for (let i = 0; i < inputs.length; i++) {
                const noisyInput = inputs[i].map(row =>
                    row.map(val => val + (Math.random() - 0.5) * 0.1)
                );
                augmentedInputs.push(noisyInput);
                augmentedTargets.push(targets[i]);
            }
        }

        if (augmentedInputs.length < 2) return null;

        return {
            inputs: augmentedInputs,
            targets: augmentedTargets,
            count: augmentedInputs.length,
        };
    }

    /** Interpolate temperature at a specific timestamp from records */
    interpolateTemp(records, targetTime) {
        // If before first or after last, return null
        if (targetTime < records[0].timestamp || targetTime > records[records.length - 1].timestamp) {
            return null;
        }

        // Find surrounding records
        for (let i = 0; i < records.length - 1; i++) {
            if (records[i].timestamp <= targetTime && records[i + 1].timestamp >= targetTime) {
                const dt = records[i + 1].timestamp - records[i].timestamp;
                if (dt === 0) return records[i].temperature;
                const fraction = (targetTime - records[i].timestamp) / dt;
                return records[i].temperature + fraction * (records[i + 1].temperature - records[i].temperature);
            }
        }
        return records[records.length - 1].temperature;
    }

    /** Train the model on historical data */
    async train(records) {
        if (!LSTMPredictor.isAvailable() || this.isTraining) return false;
        if (records.length < this.minRecords) return false;

        this.isTraining = true;

        try {
            if (!this.model) await this.buildModel();

            const data = this.prepareTrainingData(records);
            if (!data || data.count < 2) {
                this.isTraining = false;
                return false;
            }

            const xs = tf.tensor3d(data.inputs);
            const ys = tf.tensor2d(data.targets);

            await this.model.fit(xs, ys, {
                epochs: 30,
                batchSize: Math.min(16, data.count),
                shuffle: true,
                verbose: 0,
            });

            xs.dispose();
            ys.dispose();
            this.isTrained = true;
            this.isTraining = false;
            return true;
        } catch (err) {
            console.warn('LSTM training failed:', err);
            this.isTraining = false;
            return false;
        }
    }

    /**
     * Monte Carlo Dropout Prediction.
     * Runs inference multiple times with dropout active to estimate uncertainty.
     */
    async predict(records, horizonMinutes) {
        if (!this.isTrained || !this.model) return null;

        try {
            const features = FeatureExtractor.extract(records);
            const window = features.slice(-this.windowSize);

            if (window.length < this.windowSize) return null;

            // Normalize using stored params
            const normalizedWindow = window.map(row =>
                row.map((val, j) => (val - this.normParams.means[j]) / this.normParams.stds[j])
            );

            const inputTensor = tf.tensor3d([normalizedWindow]);

            // Monte Carlo Dropout: run N times with training=true
            const numSamples = 30;
            const allPredictions = [];

            for (let i = 0; i < numSamples; i++) {
                const pred = this.model.predict(inputTensor, { training: true });
                allPredictions.push(Array.from(pred.dataSync()));
                pred.dispose();
            }

            inputTensor.dispose();

            // Compute mean and std per horizon
            const numOutputs = allPredictions[0].length;
            const means = new Array(numOutputs).fill(0);
            const stds = new Array(numOutputs).fill(0);

            for (const pred of allPredictions) {
                for (let j = 0; j < numOutputs; j++) means[j] += pred[j];
            }
            for (let j = 0; j < numOutputs; j++) means[j] /= numSamples;

            for (const pred of allPredictions) {
                for (let j = 0; j < numOutputs; j++) stds[j] += (pred[j] - means[j]) ** 2;
            }
            for (let j = 0; j < numOutputs; j++) stds[j] = Math.sqrt(stds[j] / numSamples);

            // Denormalize
            return this.horizons.map((h, idx) => {
                const horizonIdx = horizonMinutes.indexOf(h);
                const i = horizonIdx >= 0 ? Math.min(idx, numOutputs - 1) : idx;
                return {
                    value: means[i] * this.tempStd + this.tempMean,
                    std: stds[i] * this.tempStd,
                };
            });
        } catch (err) {
            console.warn('LSTM prediction failed:', err);
            return null;
        }
    }
}

/**
 * Ensemble Predictor — Combines Linear, Holt, Physics, and LSTM predictions.
 * Uses adaptive weighting based on recent prediction accuracy.
 */
class EnsemblePredictor {
    constructor() {
        this.linear = new LinearPredictor();
        this.holt = new HoltPredictor();
        this.physics = new PhysicsPredictor();
        this.lstm = new LSTMPredictor();
        this.weights = { linear: 0.25, holt: 0.30, physics: 0.20, lstm: 0.25 };
        this.predictionLog = []; // store past predictions for weight adaptation
    }

    /**
     * Run all available models and combine predictions.
     * @param {Array} records - Temperature history records
     * @param {Array} horizonMinutes - Array of horizon values in minutes [15, 30, 45]
     * @param {number} baseline - Baseline temperature for physics model
     * @returns {Object} Combined predictions with confidence intervals
     */
    async predict(records, horizonMinutes, baseline) {
        const results = {};
        let totalWeight = 0;

        // Linear prediction
        const linearPred = this.linear.predict(records, horizonMinutes);
        if (linearPred) {
            results.linear = linearPred;
            totalWeight += this.weights.linear;
        }

        // Holt prediction
        const holtPred = this.holt.predict(records, horizonMinutes);
        if (holtPred) {
            results.holt = holtPred;
            totalWeight += this.weights.holt;
        }

        // Physics prediction
        const physicsPred = this.physics.predict(records, horizonMinutes, baseline);
        if (physicsPred) {
            results.physics = physicsPred;
            totalWeight += this.weights.physics;
        }

        // LSTM prediction (if trained and available)
        let lstmPred = null;
        if (this.lstm.isTrained) {
            lstmPred = await this.lstm.predict(records, horizonMinutes);
            if (lstmPred) {
                results.lstm = lstmPred;
                totalWeight += this.weights.lstm;
            }
        }

        if (totalWeight === 0) return null;

        // Weighted ensemble
        const ensemblePredictions = horizonMinutes.map((h, i) => {
            let weightedSum = 0;
            let weightedVariance = 0;
            let wSum = 0;

            for (const [name, preds] of Object.entries(results)) {
                if (!preds || !preds[i]) continue;
                const w = this.weights[name];
                weightedSum += w * preds[i].value;
                weightedVariance += w * (preds[i].std ** 2 + preds[i].value ** 2);
                wSum += w;
            }

            if (wSum === 0) return { value: records[records.length - 1].temperature, std: 0.5, upper: 0, lower: 0 };

            const mean = weightedSum / wSum;
            const variance = (weightedVariance / wSum) - mean * mean;
            const std = Math.sqrt(Math.max(0, variance));

            // 95% confidence interval (1.96 * std)
            return {
                value: mean,
                std: std,
                upper: mean + 1.96 * std,
                lower: mean - 1.96 * std,
            };
        });

        return {
            predictions: ensemblePredictions,
            individual: results,
            activeModels: Object.keys(results),
            weights: { ...this.weights },
            lstmActive: lstmPred !== null,
        };
    }

    /**
     * Update model weights based on prediction accuracy (called when actual reading arrives).
     */
    updateWeights(actualTemp, pastPrediction) {
        if (!pastPrediction || !pastPrediction.individual) return;

        const modelErrors = {};
        for (const [name, preds] of Object.entries(pastPrediction.individual)) {
            if (preds && preds[0]) {
                modelErrors[name] = Math.abs(preds[0].value - actualTemp);
            }
        }

        if (Object.keys(modelErrors).length === 0) return;

        // Inverse-error weighting with smoothing
        const smoothing = 0.3;
        const invErrors = {};
        let invSum = 0;
        for (const [name, err] of Object.entries(modelErrors)) {
            const inv = 1 / (err + 0.01); // add small constant to avoid division by zero
            invErrors[name] = inv;
            invSum += inv;
        }

        for (const name of Object.keys(invErrors)) {
            const targetWeight = invErrors[name] / invSum;
            this.weights[name] = smoothing * targetWeight + (1 - smoothing) * (this.weights[name] || 0.25);
        }

        // Normalize weights
        const wTotal = Object.values(this.weights).reduce((a, b) => a + b, 0);
        for (const name of Object.keys(this.weights)) {
            this.weights[name] /= wTotal;
        }
    }

    /** Train the LSTM model */
    async trainLSTM(records) {
        if (LSTMPredictor.isAvailable() && records.length >= this.lstm.minRecords) {
            return await this.lstm.train(records);
        }
        return false;
    }
}

/**
 * Prediction Engine — Orchestrates the full prediction pipeline.
 * Manages model lifecycle, training, inference, and result formatting.
 */
class PredictionEngine {
    constructor() {
        this.ensemble = new EnsemblePredictor();
        this.lastPrediction = null;
        this.lastPredictionTime = null;
        this.predictionHistory = [];
        this.horizons = [15, 30, 45]; // minutes
    }

    /**
     * Run prediction on current history data.
     * @param {Array} records - All temperature history records
     * @param {string} subjectType - Current subject type for baseline/thresholds
     * @param {number} maxHorizon - Maximum prediction horizon in minutes
     * @returns {Object} Full prediction result with metrics
     */
    async predict(records, subjectType, maxHorizon = 45) {
        if (records.length < 3) {
            return { error: 'Insufficient data', minRequired: 3, current: records.length };
        }

        // Determine horizons based on maxHorizon
        const horizons = this.horizons.filter(h => h <= maxHorizon);
        if (horizons.length === 0) horizons.push(maxHorizon);

        // If maxHorizon is 60 and not in default set, add it
        if (maxHorizon === 60 && !horizons.includes(60)) {
            horizons.push(60);
        }

        const baseline = CONFIG.riskThresholds[subjectType]?.baseline || 36.6;
        const thresholds = CONFIG.riskThresholds[subjectType];

        // Try to train LSTM if enough data
        if (records.length >= 6 && !this.ensemble.lstm.isTrained && !this.ensemble.lstm.isTraining) {
            await this.ensemble.trainLSTM(records);
        }

        // Run ensemble prediction
        const result = await this.ensemble.predict(records, horizons, baseline);
        if (!result) return { error: 'All models failed' };

        // Classify risk for each prediction
        const predictions = result.predictions.map((pred, i) => {
            const risk = RiskAssessor.getRiskLevel(pred.value, subjectType);
            return {
                horizon: horizons[i],
                temperature: pred.value,
                std: pred.std,
                upper: pred.upper,
                lower: pred.lower,
                risk: risk,
            };
        });

        // Calculate time-to-fever (if applicable)
        const feverThreshold = thresholds ? thresholds.feverStart : 38.0;
        const currentTemp = records[records.length - 1].temperature;
        const timeToFever = this.calculateTimeToFever(currentTemp, predictions, feverThreshold);

        // Generate predictive alerts
        const alerts = this.generateAlerts(predictions, currentTemp, feverThreshold, subjectType);

        // Compute metrics
        const metrics = {
            activeModels: result.activeModels,
            lstmActive: result.lstmActive,
            weights: result.weights,
            trainingSize: records.length,
            mae: this.computeMAE(),
        };

        // Update weight adaptation if we have previous prediction
        if (this.lastPrediction && this.lastPredictionTime) {
            const elapsed = (Date.now() - this.lastPredictionTime) / 60000;
            if (elapsed >= 10) { // At least 10 min since last prediction
                this.ensemble.updateWeights(currentTemp, this.lastPrediction);
            }
        }

        this.lastPrediction = result;
        this.lastPredictionTime = Date.now();

        return {
            predictions,
            timeToFever,
            alerts,
            metrics,
            currentTemp,
        };
    }

    /**
     * Estimate time to fever threshold using linear interpolation
     * between predicted trajectory points.
     */
    calculateTimeToFever(currentTemp, predictions, threshold) {
        if (currentTemp >= threshold) {
            return { reachedAlready: true, minutes: 0 };
        }

        // Build trajectory: [0min: current, 15min: pred15, 30min: pred30, 45min: pred45]
        const trajectory = [
            { time: 0, temp: currentTemp },
            ...predictions.map(p => ({ time: p.horizon, temp: p.temperature })),
        ];

        // Find where trajectory crosses the threshold
        for (let i = 0; i < trajectory.length - 1; i++) {
            if (trajectory[i].temp < threshold && trajectory[i + 1].temp >= threshold) {
                // Linear interpolation
                const dt = trajectory[i + 1].time - trajectory[i].time;
                const dT = trajectory[i + 1].temp - trajectory[i].temp;
                if (Math.abs(dT) < 0.001) continue;
                const fraction = (threshold - trajectory[i].temp) / dT;
                const minutes = trajectory[i].time + fraction * dt;
                return { reachedAlready: false, minutes: Math.round(minutes), confidence: 'moderate' };
            }
        }

        // Check if trend suggests fever beyond prediction window
        if (predictions.length >= 2) {
            const lastPred = predictions[predictions.length - 1];
            const secLastPred = predictions[predictions.length - 2];
            const rate = (lastPred.temperature - secLastPred.temperature) /
                (lastPred.horizon - secLastPred.horizon); // C per minute
            if (rate > 0 && lastPred.temperature < threshold) {
                const remainingTemp = threshold - lastPred.temperature;
                const extraMinutes = remainingTemp / rate;
                if (extraMinutes < 120) { // Only report if within 2 hours
                    return {
                        reachedAlready: false,
                        minutes: Math.round(lastPred.horizon + extraMinutes),
                        confidence: 'low',
                        extrapolated: true,
                    };
                }
            }
        }

        return null; // No fever predicted
    }

    /** Generate predictive alerts based on trajectory analysis */
    generateAlerts(predictions, currentTemp, threshold, subjectType) {
        const alerts = [];
        const isAnimal = subjectType.startsWith('animal');

        for (const pred of predictions) {
            if (pred.temperature >= threshold && currentTemp < threshold) {
                const entity = isAnimal ? 'your pet' : 'the subject';
                alerts.push({
                    type: 'fever-predicted',
                    message: `Model predicts ${entity} may reach fever threshold (${threshold.toFixed(1)}\u00B0C) within ${pred.horizon} minutes. ` +
                        `Predicted: ${pred.temperature.toFixed(1)}\u00B0C [95% CI: ${pred.lower.toFixed(1)}\u2013${pred.upper.toFixed(1)}\u00B0C].`,
                });
                break; // Only show earliest crossing
            }
        }

        // Alert for steep predicted rise
        if (predictions.length >= 2) {
            const rise = predictions[predictions.length - 1].temperature - currentTemp;
            const timeSpan = predictions[predictions.length - 1].horizon;
            const ratePerHour = rise / (timeSpan / 60);
            if (ratePerHour > 1.5) {
                alerts.push({
                    type: 'steep-rise',
                    message: `Predicted temperature rise rate: ${ratePerHour.toFixed(1)}\u00B0C/hr. This exceeds normal variation and warrants close monitoring.`,
                });
            }
        }

        // Alert for high uncertainty
        const maxStd = Math.max(...predictions.map(p => p.std));
        if (maxStd > 1.0) {
            alerts.push({
                type: 'high-uncertainty',
                message: `Prediction uncertainty is elevated (\u00B1${maxStd.toFixed(1)}\u00B0C). Results should be interpreted with caution. More readings will improve accuracy.`,
            });
        }

        return alerts;
    }

    /** Compute Mean Absolute Error from stored predictions vs actuals */
    computeMAE() {
        if (this.predictionHistory.length < 2) return null;

        let totalError = 0;
        let count = 0;
        for (const entry of this.predictionHistory) {
            if (entry.actual !== null && entry.predicted !== null) {
                totalError += Math.abs(entry.actual - entry.predicted);
                count++;
            }
        }
        return count > 0 ? totalError / count : null;
    }

    /**
     * Record actual temperature for accuracy tracking.
     * Called when a new reading arrives after a prediction was made.
     */
    recordActual(temperature) {
        if (this.lastPrediction && this.lastPredictionTime) {
            const elapsed = (Date.now() - this.lastPredictionTime) / 60000;
            // Find the closest horizon
            const closestHorizon = this.horizons.reduce((best, h) =>
                Math.abs(h - elapsed) < Math.abs(best - elapsed) ? h : best, this.horizons[0]);

            if (Math.abs(elapsed - closestHorizon) < 10) { // within 10 min of a horizon
                const predIdx = this.lastPrediction.predictions?.findIndex(p =>
                    p.horizon === closestHorizon);
                if (predIdx >= 0 && this.lastPrediction.predictions[predIdx]) {
                    this.predictionHistory.push({
                        predicted: this.lastPrediction.predictions[predIdx].value,
                        actual: temperature,
                        horizon: closestHorizon,
                        timestamp: Date.now(),
                    });
                    // Keep only last 50 entries
                    if (this.predictionHistory.length > 50) {
                        this.predictionHistory = this.predictionHistory.slice(-50);
                    }
                }
            }
        }
    }
}

// ======================= MAIN APPLICATION =======================
class App {
    constructor() {
        this.calibration = new CalibrationCurve();
        this.history = new HistoryManager();
        this.stream = null;
        this.capturedImage = null;
        this.roi = null;
        this.isDrawing = false;
        this.roiStart = null;
        this.tempChart = null;
        this.currentRange = '1h';

        // Prediction engine
        this.predictionEngine = new PredictionEngine();
        this.lastPredictionResult = null;

        this.init();
    }

    init() {
        this.bindEvents();
        this.initPagination();
        this.renderHistory();
        this.updateChart();
        this.setDefaultBaseline();
        this.initPrediction();
        this.initAlarmSystem();
    }

    // -------------------- EVENT BINDING ---------------------
    bindEvents() {
        // Tabs
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Camera controls
        document.getElementById('btn-start-camera').addEventListener('click', () => this.startCamera());
        document.getElementById('btn-capture').addEventListener('click', () => this.capturePhoto());
        document.getElementById('btn-stop-camera').addEventListener('click', () => this.stopCamera());

        // Upload
        const uploadArea = document.getElementById('upload-area');
        const fileInput = document.getElementById('file-input');
        uploadArea.addEventListener('click', () => fileInput.click());
        uploadArea.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadArea.classList.add('drag-over');
        });
        uploadArea.addEventListener('dragleave', () => uploadArea.classList.remove('drag-over'));
        uploadArea.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadArea.classList.remove('drag-over');
            if (e.dataTransfer.files.length) this.handleFile(e.dataTransfer.files[0]);
        });
        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length) this.handleFile(e.target.files[0]);
        });

        // Image preview & ROI
        const previewCanvas = document.getElementById('preview-canvas');
        previewCanvas.addEventListener('mousedown', (e) => this.startROI(e));
        previewCanvas.addEventListener('mousemove', (e) => this.drawROI(e));
        previewCanvas.addEventListener('mouseup', (e) => this.endROI(e));
        // Touch support
        previewCanvas.addEventListener('touchstart', (e) => { e.preventDefault(); this.startROI(e.touches[0]); });
        previewCanvas.addEventListener('touchmove', (e) => { e.preventDefault(); this.drawROI(e.touches[0]); });
        previewCanvas.addEventListener('touchend', (e) => { e.preventDefault(); this.endROI(e); });

        document.getElementById('btn-analyze').addEventListener('click', () => this.analyzeImage());
        document.getElementById('btn-reset-roi').addEventListener('click', () => this.resetROI());
        document.getElementById('btn-clear-image').addEventListener('click', () => this.clearImage());

        // Chart range
        document.querySelectorAll('.chart-controls .btn-outline:not(.btn-danger)').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.chart-controls .btn-outline:not(.btn-danger)').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentRange = btn.dataset.range;
                this.updateChart();
            });
        });

        // Clear history
        document.getElementById('btn-clear-history').addEventListener('click', () => {
            if (confirm((typeof I18n !== 'undefined') ? I18n.t('confirm.clearHistory') : 'Clear all temperature history?')) {
                this.history.clear();
                this.renderHistory();
                this.updateChart();
                this.lastPredictionResult = null;
                this.clearPredictionDisplay();
                this.updateReadingCount();
                document.getElementById('results-section').style.display = 'none';
                document.getElementById('recommendations-section').style.display = 'none';
                document.getElementById('trend-alert').style.display = 'none';
                // Reset health status card
                SimpleUI.updateFace('waiting');
                document.getElementById('status-temp').innerHTML = '--.-&deg;C';
                document.getElementById('status-label').textContent = 'Waiting for reading...';
                document.getElementById('status-label').style.color = '#757575';
                document.getElementById('status-message').textContent = 'Take a photo of the sensor to check temperature';
                document.getElementById('status-time').textContent = '';
                const hsc = document.getElementById('health-status-card');
                if (hsc) hsc.className = 'health-status-card';
                document.getElementById('sticky-urgent').style.display = 'none';
                SimpleUI.setStep(1);
            }
        });

        // Export CSV
        document.getElementById('btn-export-csv').addEventListener('click', () => this.exportCSV());

        // Collapsible section toggles
        document.querySelectorAll('.collapsible').forEach(header => {
            header.addEventListener('click', () => {
                const body = header.nextElementSibling;
                const icon = header.querySelector('.collapse-icon');
                if (!body) return;
                if (body.style.display === 'none') {
                    body.style.display = 'block';
                    if (icon) icon.classList.add('open');
                    // Init validation charts on first open
                    if (header.id === 'validation-toggle') {
                        ValidationDisplay.init();
                    }
                } else {
                    body.style.display = 'none';
                    if (icon) icon.classList.remove('open');
                }
            });
        });

        // Subject type change
        document.getElementById('subject-type').addEventListener('change', () => this.setDefaultBaseline());

        // Alert dismiss
        document.getElementById('alert-dismiss').addEventListener('click', () => {
            document.getElementById('trend-alert').style.display = 'none';
        });

        // Prediction (section replaced by Health Insights)
        const predBtn = document.getElementById('btn-run-prediction');
        if (predBtn) predBtn.addEventListener('click', () => this.runPrediction());
    }

    // -------------------- TABS ---------------------
    switchTab(tabName) {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
        document.getElementById(`tab-${tabName}`).classList.add('active');
    }

    // -------------------- CAMERA ---------------------
    async startCamera() {
        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 960 } }
            });
            const video = document.getElementById('camera-feed');
            video.srcObject = this.stream;
            document.getElementById('camera-overlay').classList.add('hidden');
            document.getElementById('btn-start-camera').disabled = true;
            document.getElementById('btn-capture').disabled = false;
            document.getElementById('btn-stop-camera').disabled = false;
            SimpleUI.setStep(1); // Camera ready — step 1
        } catch (err) {
            const _t = (typeof I18n !== 'undefined') ? I18n.t('alert.cameraError') : 'Camera access denied or not available.';
            alert(_t + ' ' + err.message);
        }
    }

    capturePhoto() {
        SimpleUI.setStep(2); // Photo taken — step 2
        const video = document.getElementById('camera-feed');
        const canvas = document.getElementById('camera-canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0);

        // Create image from canvas
        const dataUrl = canvas.toDataURL('image/png');
        // Load image and automatically trigger analysis
        this.loadImageToPreview(dataUrl, true);
    }

    stopCamera() {
        if (this.stream) {
            this.stream.getTracks().forEach(t => t.stop());
            this.stream = null;
        }
        const video = document.getElementById('camera-feed');
        video.srcObject = null;
        document.getElementById('camera-overlay').classList.remove('hidden');
        document.getElementById('btn-start-camera').disabled = false;
        document.getElementById('btn-capture').disabled = true;
        document.getElementById('btn-stop-camera').disabled = true;
    }

    // -------------------- FILE UPLOAD ---------------------
    handleFile(file) {
        if (!file.type.startsWith('image/')) {
            alert((typeof I18n !== 'undefined') ? I18n.t('alert.selectImage') : 'Please select an image file.');
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => this.loadImageToPreview(e.target.result);
        reader.readAsDataURL(file);
    }

    loadImageToPreview(dataUrl, autoAnalyze = false) {
        const img = new Image();
        img.onload = () => {
            this.capturedImage = img;
            const canvas = document.getElementById('preview-canvas');
            // Scale to fit max 720px wide
            const maxW = 720;
            const scale = Math.min(1, maxW / img.width);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            document.getElementById('image-preview-section').style.display = 'block';
            this.roi = null;

            // Auto-analyze if requested (e.g., camera capture)
            if (autoAnalyze) {
                this.analyzeImage();
            }
        };
        img.src = dataUrl;
    }

    // -------------------- ROI SELECTION ---------------------
    getCanvasCoords(e) {
        const canvas = document.getElementById('preview-canvas');
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
        };
    }

    startROI(e) {
        const coords = this.getCanvasCoords(e);
        this.isDrawing = true;
        this.roiStart = coords;
        this.roi = null;
    }

    drawROI(e) {
        if (!this.isDrawing || !this.capturedImage) return;
        const coords = this.getCanvasCoords(e);
        const canvas = document.getElementById('preview-canvas');
        const ctx = canvas.getContext('2d');

        // Redraw image
        ctx.drawImage(this.capturedImage, 0, 0, canvas.width, canvas.height);

        // Draw selection rectangle
        const x = Math.min(this.roiStart.x, coords.x);
        const y = Math.min(this.roiStart.y, coords.y);
        const w = Math.abs(coords.x - this.roiStart.x);
        const h = Math.abs(coords.y - this.roiStart.y);

        // Dim outside ROI
        ctx.fillStyle = 'rgba(0,0,0,0.4)';
        ctx.fillRect(0, 0, canvas.width, y);
        ctx.fillRect(0, y, x, h);
        ctx.fillRect(x + w, y, canvas.width - x - w, h);
        ctx.fillRect(0, y + h, canvas.width, canvas.height - y - h);

        // Draw border
        ctx.strokeStyle = '#C41E3A';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.strokeRect(x, y, w, h);
        ctx.setLineDash([]);
    }

    endROI(e) {
        if (!this.isDrawing) return;
        this.isDrawing = false;

        // Get final coords from the touch or mouse event
        let coords;
        if (e.changedTouches) {
            coords = this.getCanvasCoords(e.changedTouches[0]);
        } else if (e.clientX !== undefined) {
            coords = this.getCanvasCoords(e);
        } else {
            // Fallback - use last known start
            coords = this.roiStart;
        }

        if (this.roiStart) {
            const x = Math.min(this.roiStart.x, coords.x);
            const y = Math.min(this.roiStart.y, coords.y);
            const w = Math.abs(coords.x - this.roiStart.x);
            const h = Math.abs(coords.y - this.roiStart.y);

            if (w > 5 && h > 5) {
                this.roi = { x, y, w, h };
            } else {
                this.roi = null;
                // Redraw without selection
                if (this.capturedImage) {
                    const canvas = document.getElementById('preview-canvas');
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(this.capturedImage, 0, 0, canvas.width, canvas.height);
                }
            }
        }
    }

    resetROI() {
        this.roi = null;
        if (this.capturedImage) {
            const canvas = document.getElementById('preview-canvas');
            const ctx = canvas.getContext('2d');
            ctx.drawImage(this.capturedImage, 0, 0, canvas.width, canvas.height);
        }
    }

    clearImage() {
        this.capturedImage = null;
        this.roi = null;
        document.getElementById('image-preview-section').style.display = 'none';
    }

    // -------------------- ANALYSIS ---------------------
    analyzeImage() {
        if (!this.capturedImage) {
            alert((typeof I18n !== 'undefined') ? I18n.t('alert.captureFirst') : 'Please capture or upload an image first.');
            return;
        }

        const startTime = performance.now();

        // Use a temporary canvas for clean color extraction (without ROI overlay)
        const canvas = document.getElementById('preview-canvas');
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        tempCtx.drawImage(this.capturedImage, 0, 0, canvas.width, canvas.height);

        // Extract average color from the clean (no overlay) canvas
        const avgColor = ColorAnalyzer.getAverageColor(tempCanvas, this.roi);
        if (!avgColor) {
            alert((typeof I18n !== 'undefined') ? I18n.t('alert.colorError') : 'Could not extract color from the selected region.');
            return;
        }

        // Convert to HSL
        const hsl = ColorAnalyzer.rgbToHsl(avgColor.r, avgColor.g, avgColor.b);

        // Pipeline: Hue → Monotonic PCHIP → Wavelength → GPR Spline → Temperature
        // Step 1: Hue → Wavelength (sensor-specific calibration, no CIE)
        const wavelength = hueWlCalibration.interpolate(hsl.h);

        // Step 2: Wavelength → Temperature (GPR fit line)
        const temperature = this.calibration.wavelengthToTemp(wavelength);
        if (temperature === null) {
            alert((typeof I18n !== 'undefined') ? I18n.t('alert.tempError') : 'Could not map wavelength to temperature. Check calibration data.');
            return;
        }

        const roundedTemp = Math.round(temperature * 100) / 100;

        // Get subject type, patient info, and conditions (needed for risk)
        const subjectType = document.getElementById('subject-type').value;
        const subjectName = (document.getElementById('subject-name')?.value || '').trim();
        const conditions = document.getElementById('underlying-conditions')?.value || 'none';

        // Condition-aware risk assessment (3-level: 0=Normal, 1=Warning, 2=Fever)
        const riskLevel = RiskAssessor.getRiskLevel(roundedTemp, subjectType, conditions);
        const riskPct = RiskAssessor.getRiskPercentage(roundedTemp, subjectType, conditions);

        // Get previous record for comparison
        const prevRecord = this.history.getLastRecord();
        const tempChange = prevRecord ? roundedTemp - prevRecord.temperature : 0;

        // Measure total processing time
        const processingTime = performance.now() - startTime;

        // Create record (include speed, patient name, and conditions for log display)
        const record = {
            timestamp: Date.now(),
            rgb: avgColor,
            hsl: hsl,
            wavelength: wavelength,
            temperature: roundedTemp,
            riskLevel: riskLevel.level,
            subjectType: subjectType,
            change: tempChange,
            speed: processingTime,
            patientName: subjectName || '',
            conditions: conditions || 'none',
        };

        // Save to history
        this.history.addRecord(record);

        // Trend analysis (condition-aware rise thresholds)
        const trend = TrendAnalyzer.analyze(this.history.records, conditions);

        // ── AI Recommendations: try LLM first, fallback to rule-based ──
        const aiInputData = {
            temperature: roundedTemp,
            riskLevel,
            subjectType,
            trend,
            history: this.history.records,
            conditions,
        };

        // Always generate rule-based result (instant, used as fallback)
        const ruleBasedResult = AIRecommendationEngine.generate(aiInputData);

        // Display rule-based immediately so UI is never empty
        this.displayResults(record, riskLevel, riskPct, tempChange, processingTime);
        this.displayTrendAlert(trend);
        this.displayRecommendations(ruleBasedResult);
        this.renderHistory();
        this.updateChart();

        // Store last analysis for re-translation on language switch
        this.lastAnalysis = { riskLevel, trend, subjectType };

        // Update Health Status Card (simple mode friendly)
        SimpleUI.updateStatus(roundedTemp, riskLevel, trend, ruleBasedResult, subjectType);

        // Update health probability indicators (condition-aware)
        const probabilities = ProbabilityCalculator.calculate(
            roundedTemp, subjectType, this.history.records, trend, conditions
        );
        ProbabilityCalculator.updateDisplay(probabilities);

        // Alarm system check (uses riskLevel which already incorporates condition offsets)
        // 2-consecutive rule: warning triggers only after 2 consecutive warning readings
        AlarmSystem.check(riskLevel.level, roundedTemp, trend);

        // Health insights update
        HealthInsights.update(roundedTemp, subjectType, this.history.records, trend);

        // Update prediction reading count and record actual for accuracy tracking
        this.updateReadingCount();
        this.predictionEngine.recordActual(roundedTemp);

        // ── Async LLM enhancement (replaces rule-based if successful) ──
        if (LLMEngine.enabled && LLMEngine.API_URL) {
            this._fetchLLMRecommendation(aiInputData, roundedTemp, riskLevel, trend, subjectType);
        }
    }

    /**
     * Fetch LLM recommendation asynchronously and update the UI if successful.
     * Does NOT block the main analysis flow.
     */
    async _fetchLLMRecommendation(aiInputData, temperature, riskLevel, trend, subjectType) {
        // Show loading indicator on the recommendation section
        const recBody = document.getElementById('rec-body');
        const origHtml = recBody ? recBody.innerHTML : '';
        if (recBody) {
            recBody.innerHTML += `<div class="llm-loading" id="llm-loading">
                <span class="material-symbols-outlined spin">progress_activity</span>
                <span>${I18n.t('llm.loading')}</span>
            </div>`;
        }

        try {
            const llmResult = await LLMEngine.getRecommendation(aiInputData);
            // Remove loading indicator
            const loadEl = document.getElementById('llm-loading');
            if (loadEl) loadEl.remove();

            if (llmResult) {
                // LLM succeeded — replace the recommendation display
                this.displayRecommendations(llmResult);
                SimpleUI.updateStatus(temperature, riskLevel, trend, llmResult, subjectType);
            }
            // If null, the rule-based result stays (already displayed)
        } catch (err) {
            // Remove loading indicator on error
            const loadEl = document.getElementById('llm-loading');
            if (loadEl) loadEl.remove();
            console.warn('[LLM] Enhancement failed, keeping rule-based:', err);
        }
    }

    // -------------------- DISPLAY RESULTS ---------------------
    displayResults(record, riskLevel, riskPct, tempChange, processingTime) {
        const section = document.getElementById('results-section');
        section.style.display = 'block';
        section.classList.add('fade-in');

        // Timestamp (full precision: YYYY-MM-DD HH:MM:SS)
        const _rd = new Date(record.timestamp);
        const _rp = n => String(n).padStart(2, '0');
        const fullTs = `${_rd.getFullYear()}-${_rp(_rd.getMonth()+1)}-${_rp(_rd.getDate())} ${_rp(_rd.getHours())}:${_rp(_rd.getMinutes())}:${_rp(_rd.getSeconds())}`;
        document.getElementById('result-timestamp').textContent =
            fullTs + ` \u2014 analyzed in ${(processingTime / 1000).toFixed(3)}s`;

        // Speed indicator in Health Status Card (visible in all modes)
        const speedEl = document.getElementById('status-speed');
        const speedValEl = document.getElementById('speed-value');
        if (speedEl && speedValEl) {
            speedEl.style.display = 'inline-flex';
            const secs = processingTime / 1000;
            speedValEl.textContent = secs < 1
                ? `${processingTime.toFixed(0)} ms`
                : `${secs.toFixed(2)} s`;
            // Re-trigger animation
            speedEl.style.animation = 'none';
            speedEl.offsetHeight; // reflow
            speedEl.style.animation = '';
        }

        // Also update header stat chip
        const headerSpeedEl = document.getElementById('header-speed-value');
        if (headerSpeedEl) {
            const secs = processingTime / 1000;
            headerSpeedEl.textContent = secs < 1
                ? `${processingTime.toFixed(0)} ms`
                : `${secs.toFixed(2)} s`;
        }

        // Color
        const { r, g, b } = record.rgb;
        document.getElementById('color-swatch').style.background = `rgb(${r},${g},${b})`;
        document.getElementById('rgb-value').textContent = `RGB(${r}, ${g}, ${b})`;
        document.getElementById('hsl-value').textContent =
            `HSL(${record.hsl.h}\u00B0, ${record.hsl.s}%, ${record.hsl.l}%)`;

        // Wavelength
        document.getElementById('wavelength-value').textContent = `${record.wavelength} nm`;
        // Position marker on spectrum bar (380nm-700nm range)
        const wlPct = ((record.wavelength - 380) / (700 - 380)) * 100;
        document.getElementById('wavelength-marker').style.left = `${Math.max(2, Math.min(98, wlPct))}%`;

        // Temperature
        const tempEl = document.getElementById('temp-value');
        tempEl.textContent = `${record.temperature.toFixed(2)}\u00B0C`;
        tempEl.className = 'temp-big';
        if (riskLevel.level === 0) tempEl.classList.add('temp-normal');
        else if (riskLevel.level === 1) tempEl.classList.add('temp-warning');
        else tempEl.classList.add('temp-fever');

        // Temperature change
        const changeEl = document.getElementById('temp-change');
        if (tempChange !== 0) {
            const sign = tempChange > 0 ? '+' : '';
            changeEl.textContent = `${sign}${tempChange.toFixed(2)}\u00B0C from previous reading`;
            changeEl.className = 'temp-change ' + (tempChange > 0 ? 'up' : tempChange < 0 ? 'down' : 'neutral');
        } else if (this.history.records.length <= 1) {
            changeEl.textContent = 'First reading \u2014 no comparison available';
            changeEl.className = 'temp-change neutral';
        } else {
            changeEl.textContent = 'No change from previous reading';
            changeEl.className = 'temp-change neutral';
        }

        // Risk level bar
        document.querySelectorAll('.risk-segment').forEach(seg => {
            seg.classList.remove('active');
            if (parseInt(seg.dataset.level) === riskLevel.level) {
                seg.classList.add('active');
            }
        });
        document.getElementById('risk-pointer').style.left = `${riskPct}%`;
        const riskLabelEl = document.getElementById('risk-label');
        riskLabelEl.textContent = riskLevel.label;
        riskLabelEl.style.color = riskLevel.color;
    }

    displayTrendAlert(trend) {
        const alertEl = document.getElementById('trend-alert');

        if (trend.alerts.length === 0) {
            alertEl.style.display = 'none';
            return;
        }

        const alert = trend.alerts[0];
        alertEl.style.display = 'flex';
        alertEl.className = 'alert-banner';

        if (alert.type === 'rapid') {
            alertEl.classList.add('alert-rapid');
        } else if (alert.type === 'slow') {
            alertEl.classList.add('alert-slow');
        } else if (alert.type === 'recovery') {
            alertEl.classList.add('alert-recovery');
        }

        document.getElementById('alert-title').textContent = alert.title;
        document.getElementById('alert-message').textContent = alert.message;
    }

    displayRecommendations(aiResult) {
        const section = document.getElementById('recommendations-section');
        section.style.display = 'block';
        section.classList.add('fade-in');

        const isLLM = aiResult.source === 'llm';

        // Think
        document.getElementById('think-content').textContent = aiResult.think.summary;

        // Analyze
        document.getElementById('analyze-content').textContent = aiResult.analyze.summary;

        // Decide step summary
        const decide = aiResult.decide;
        document.getElementById('decide-content').textContent =
            `${decide.title} \u2014 ${decide.recommendations.length} recommendation(s), ${decide.actions.length} action(s) generated.`;
        document.getElementById('rec-icon').textContent = decide.icon;

        // Title with optional LLM badge
        const recTitleEl = document.getElementById('rec-title');
        if (isLLM) {
            recTitleEl.innerHTML = `${decide.title} <span class="llm-source-badge"><span class="material-symbols-outlined" style="font-size:14px">smart_toy</span> ${aiResult.model}</span>`;
        } else {
            recTitleEl.textContent = decide.title;
        }

        // Recommendations list
        const recBody = document.getElementById('rec-body');
        if (decide.recommendations.length > 0) {
            recBody.innerHTML = '<ul>' + decide.recommendations.map(r => `<li>${r}</li>`).join('') + '</ul>';
        } else {
            recBody.innerHTML = '<p>No specific recommendations at this time.</p>';
        }

        // Action chips
        const actionsEl = document.getElementById('rec-actions');
        actionsEl.innerHTML = decide.actions.map(a =>
            `<span class="action-chip ${a.class}">${a.label}</span>`
        ).join('');

        // LLM badge in card header
        const headerBadge = document.getElementById('llm-badge');
        if (headerBadge) {
            headerBadge.style.display = isLLM ? 'inline-flex' : 'none';
        }
    }

    // -------------------- PREDICTION ----------------------
    initAlarmSystem() {
        AlarmSystem.bindEvents();
    }

    initPrediction() {
        this.updateReadingCount();
    }

    updateReadingCount() {
        const count = this.history.records.length;
        const countEl = document.getElementById('reading-count');
        const statusEl = document.getElementById('prediction-status');
        if (countEl) countEl.textContent = count;

        if (statusEl) {
            if (count >= 3) {
                statusEl.classList.add('ready');
                statusEl.innerHTML = `<span class="material-symbols-outlined">check_circle</span>
                    <span>${count} readings available. Prediction models ready.</span>`;
            } else {
                statusEl.classList.remove('ready');
                statusEl.innerHTML = `<span class="material-symbols-outlined">info</span>
                    <span>Minimum 3 temperature readings required for prediction. Current readings: <strong>${count}</strong></span>`;
            }
        }

        // Enable/disable prediction button
        const btn = document.getElementById('btn-run-prediction');
        if (btn) btn.disabled = count < 3;
    }

    async runPrediction() {
        const records = this.history.records;
        if (records.length < 3) {
            return;
        }

        const subjectType = document.getElementById('subject-type').value;
        const horizonSelect = document.getElementById('prediction-horizon');
        const maxHorizon = parseInt(horizonSelect?.value || '45');

        // Show loading state
        const btn = document.getElementById('btn-run-prediction');
        if (btn) {
            btn.disabled = true;
            btn.innerHTML = '<span class="material-symbols-outlined icon-sm">hourglass_empty</span> Running...';
        }

        try {
            const result = await this.predictionEngine.predict(records, subjectType, maxHorizon);

            if (result.error) {
                console.warn('Prediction error:', result.error);
                return;
            }

            this.lastPredictionResult = result;
            this.displayPrediction(result);
            this.updateChartWithPrediction(result);
        } catch (err) {
            console.error('Prediction failed:', err);
        } finally {
            if (btn) {
                btn.disabled = false;
                btn.innerHTML = '<span class="material-symbols-outlined icon-sm">psychology</span> Run Prediction';
            }
        }
    }

    displayPrediction(result) {
        const grid = document.getElementById('prediction-grid');
        const countdownEl = document.getElementById('fever-countdown');
        const alertEl = document.getElementById('predictive-alert');

        if (!grid || !result.predictions) return;

        // Show prediction grid
        grid.style.display = 'grid';

        // Update prediction cards
        const horizonMap = { 15: 0, 30: 1, 45: 2, 60: 2 };
        const cardHorizons = [15, 30, 45];

        for (const h of cardHorizons) {
            const pred = result.predictions.find(p => p.horizon === h);
            const cardEl = document.getElementById(`pred-card-${h}`);
            const tempEl = document.getElementById(`pred-temp-${h}`);
            const ciEl = document.getElementById(`pred-ci-${h}`);
            const riskEl = document.getElementById(`pred-risk-${h}`);

            if (!pred || !cardEl) continue;

            // Update temperature
            if (tempEl) tempEl.textContent = `${pred.temperature.toFixed(1)}\u00B0C`;

            // Update confidence interval
            if (ciEl) ciEl.textContent = `95% CI: ${pred.lower.toFixed(1)}\u2013${pred.upper.toFixed(1)}\u00B0C`;

            // Update risk classification
            if (riskEl) {
                riskEl.textContent = pred.risk.label;
                riskEl.style.color = pred.risk.color;
                riskEl.style.background = pred.risk.level <= 1 ? '#F0FDF4' :
                    pred.risk.level === 2 ? '#FFFBEB' :
                    pred.risk.level === 3 ? '#FFF7ED' :
                    pred.risk.level === 4 ? '#FEF2F2' : '#450A0A';
                if (pred.risk.level === 5) riskEl.style.color = 'white';
            }

            // Style the card border-top based on risk
            cardEl.className = 'pred-card';
            if (pred.risk.level <= 1) cardEl.classList.add('risk-normal');
            else if (pred.risk.level === 2) cardEl.classList.add('risk-mild');
            else if (pred.risk.level === 3) cardEl.classList.add('risk-moderate');
            else if (pred.risk.level === 4) cardEl.classList.add('risk-high');
            else cardEl.classList.add('risk-critical');
        }

        // Handle 60-min prediction: show in the 45-min card with updated label
        const pred60 = result.predictions.find(p => p.horizon === 60);
        if (pred60 && !result.predictions.find(p => p.horizon === 45)) {
            const cardEl = document.getElementById('pred-card-45');
            if (cardEl) {
                const horizonLabel = cardEl.querySelector('.pred-horizon');
                if (horizonLabel) horizonLabel.textContent = 'T + 60 min';
            }
        }

        // Time-to-fever countdown
        if (countdownEl) {
            if (result.timeToFever) {
                countdownEl.style.display = 'flex';
                const titleEl = document.getElementById('countdown-title');
                const valueEl = document.getElementById('countdown-value');

                if (result.timeToFever.reachedAlready) {
                    if (titleEl) titleEl.textContent = 'Fever Threshold Already Reached';
                    if (valueEl) valueEl.textContent = 'Current temperature is above threshold';
                } else {
                    const confidence = result.timeToFever.confidence === 'low' ? ' (extrapolated)' : '';
                    if (titleEl) titleEl.textContent = 'Predicted Fever Onset';
                    if (valueEl) valueEl.textContent = `~${result.timeToFever.minutes} minutes${confidence}`;
                }
            } else {
                countdownEl.style.display = 'none';
            }
        }

        // Predictive alerts
        if (alertEl) {
            if (result.alerts && result.alerts.length > 0) {
                alertEl.style.display = 'flex';
                const textEl = document.getElementById('predictive-alert-text');
                if (textEl) textEl.textContent = result.alerts.map(a => a.message).join(' ');
            } else {
                alertEl.style.display = 'none';
            }
        }

    }

    clearPredictionDisplay() {
        const grid = document.getElementById('prediction-grid');
        if (grid) grid.style.display = 'none';
        const countdown = document.getElementById('fever-countdown');
        if (countdown) countdown.style.display = 'none';
        const alert = document.getElementById('predictive-alert');
        if (alert) alert.style.display = 'none';
    }

    updateChartWithPrediction(result) {
        if (!this.tempChart || !result.predictions) return;

        const records = this.history.getRecords(this.currentRange === 'all' ? null : this.currentRange);
        if (records.length === 0) return;

        const subjectType = document.getElementById('subject-type').value;
        const lastTimestamp = records[records.length - 1].timestamp;

        // Measured data as {x: Date, y: temp}
        const measuredData = records.map(r => ({
            x: new Date(r.timestamp),
            y: r.temperature,
        }));

        // Prediction line: starts from last measured point, extends into future
        const predLine = [
            { x: new Date(lastTimestamp), y: records[records.length - 1].temperature },
        ];
        const upperBand = [
            { x: new Date(lastTimestamp), y: records[records.length - 1].temperature },
        ];
        const lowerBand = [
            { x: new Date(lastTimestamp), y: records[records.length - 1].temperature },
        ];

        for (const p of result.predictions) {
            const futureTime = new Date(lastTimestamp + p.horizon * 60000);
            predLine.push({ x: futureTime, y: p.temperature });
            upperBand.push({ x: futureTime, y: p.upper });
            lowerBand.push({ x: futureTime, y: p.lower });
        }

        // Dataset 0: Measured temperatures
        this.tempChart.data.datasets[0].data = measuredData;
        this.tempChart.data.datasets[0].pointBackgroundColor = records.map(r => {
            const risk = RiskAssessor.getRiskLevel(r.temperature, subjectType);
            return risk.color;
        });

        // Ensure we have prediction datasets (1-3)
        while (this.tempChart.data.datasets.length < 4) {
            this.tempChart.data.datasets.push({});
        }

        // Dataset 1: Prediction line (dashed)
        this.tempChart.data.datasets[1] = {
            label: 'Predicted Trend',
            data: predLine,
            borderColor: '#6366f1',
            borderWidth: 2,
            borderDash: [6, 4],
            tension: 0.3,
            pointRadius: predLine.map((pt, i) => i === 0 ? 0 : 5),
            pointBackgroundColor: '#6366f1',
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointStyle: 'triangle',
            fill: false,
            spanGaps: true,
        };

        // Dataset 2: Upper confidence bound
        this.tempChart.data.datasets[2] = {
            label: '95% CI Upper',
            data: upperBand,
            borderColor: 'transparent',
            borderWidth: 0,
            pointRadius: 0,
            fill: '+1', // fill to next dataset (lower bound)
            backgroundColor: 'rgba(99, 102, 241, 0.1)',
            spanGaps: true,
        };

        // Dataset 3: Lower confidence bound
        this.tempChart.data.datasets[3] = {
            label: '95% CI Lower',
            data: lowerBand,
            borderColor: 'transparent',
            borderWidth: 0,
            pointRadius: 0,
            fill: false,
            spanGaps: true,
        };

        // Update threshold annotations
        const thresholds = CONFIG.riskThresholds[subjectType];
        if (thresholds) {
            this.tempChart.options.plugins.annotation = this.getChartAnnotations(thresholds);
        }

        this.tempChart.update();
    }

    // -------------------- HISTORY TABLE (PAGINATED) ---------------------
    renderHistory() {
        const tbody = document.getElementById('measurement-tbody');
        const records = this.history.records;
        const paginationEl = document.getElementById('log-pagination');

        if (records.length === 0) {
            tbody.innerHTML = `<tr class="empty-row"><td colspan="11">${I18n.t('log.empty')}</td></tr>`;
            if (paginationEl) paginationEl.style.display = 'none';
            return;
        }

        // Determine page size
        const pageSizeSelect = document.getElementById('log-page-size');
        const pageSizeVal = pageSizeSelect ? pageSizeSelect.value : '10';
        const pageSize = pageSizeVal === 'all' ? records.length : parseInt(pageSizeVal);

        // Show most recent first
        const allRows = records.slice().reverse();
        const totalPages = Math.ceil(allRows.length / pageSize);

        // Clamp current page
        if (!this._logPage) this._logPage = 1;
        if (this._logPage > totalPages) this._logPage = totalPages;
        if (this._logPage < 1) this._logPage = 1;

        const startIdx = (this._logPage - 1) * pageSize;
        const pageRows = allRows.slice(startIdx, startIdx + pageSize);

        const rows = pageRows.map((r, idx) => {
            const num = records.length - (startIdx + idx);
            const _d = new Date(r.timestamp);
            const _p = n => String(n).padStart(2, '0');
            const time = `${_d.getFullYear()}-${_p(_d.getMonth()+1)}-${_p(_d.getDate())} ${_p(_d.getHours())}:${_p(_d.getMinutes())}:${_p(_d.getSeconds())}`;
            const colorDot = `<span class="td-color-dot" style="background:rgb(${r.rgb.r},${r.rgb.g},${r.rgb.b})"></span>`;
            const wl = `${r.wavelength} nm`;
            const temp = r.temperature.toFixed(2);

            // Change
            let changeStr = '\u2014';
            let changeClass = 'td-change-neutral';
            if (r.change !== 0 && r.change !== undefined) {
                const sign = r.change > 0 ? '+' : '';
                changeStr = `${sign}${r.change.toFixed(2)}`;
                changeClass = r.change > 0 ? 'td-change-up' : 'td-change-down';
            }

            // Risk badge (condition-aware)
            const risk = RiskAssessor.getRiskLevel(r.temperature, r.subjectType, r.conditions || 'none');
            const riskBadge = `<span class="td-risk-badge risk-${risk.level}" style="background:${risk.color}">${risk.label}</span>`;

            // Trend (professional symbols)
            let trendIcon = '\u2014';
            if (r.change > 0.2) trendIcon = '\u25B2';
            else if (r.change < -0.2) trendIcon = '\u25BC';
            else if (r.change !== undefined) trendIcon = '\u2192';

            // Speed
            const speedMs = r.speed;
            let speedStr = '\u2014';
            if (speedMs !== undefined && speedMs !== null) {
                speedStr = speedMs < 1000
                    ? `${speedMs.toFixed(0)} ms`
                    : `${(speedMs / 1000).toFixed(2)} s`;
            }

            // Patient name and condition
            const patientName = r.patientName || '\u2014';
            const condKey = r.conditions && r.conditions !== 'none' ? r.conditions : '';
            const condLabel = condKey ? I18n.t('ai.cond.' + condKey) : '\u2014';

            return `<tr>
                <td>${num}</td>
                <td>${time}</td>
                <td class="td-patient">${patientName}</td>
                <td class="td-condition">${condLabel}</td>
                <td>${colorDot}</td>
                <td>${wl}</td>
                <td><strong>${temp}</strong></td>
                <td class="${changeClass}">${changeStr}</td>
                <td>${riskBadge}</td>
                <td>${trendIcon}</td>
                <td class="td-speed">${speedStr}</td>
            </tr>`;
        });

        tbody.innerHTML = rows.join('');

        // Update pagination controls
        if (paginationEl) {
            if (totalPages <= 1 && pageSizeVal === 'all') {
                paginationEl.style.display = 'none';
            } else {
                paginationEl.style.display = 'flex';
                const info = document.getElementById('log-page-info');
                if (info) info.textContent = `${I18n.t('log.page')} ${this._logPage} / ${totalPages}`;
                document.getElementById('log-page-first').disabled = (this._logPage <= 1);
                document.getElementById('log-page-prev').disabled = (this._logPage <= 1);
                document.getElementById('log-page-next').disabled = (this._logPage >= totalPages);
                document.getElementById('log-page-last').disabled = (this._logPage >= totalPages);
            }
        }
    }

    initPagination() {
        const pageSizeSelect = document.getElementById('log-page-size');
        if (pageSizeSelect) {
            pageSizeSelect.addEventListener('change', () => {
                this._logPage = 1;
                this.renderHistory();
            });
        }
        document.getElementById('log-page-first')?.addEventListener('click', () => { this._logPage = 1; this.renderHistory(); });
        document.getElementById('log-page-prev')?.addEventListener('click', () => { this._logPage = Math.max(1, (this._logPage || 1) - 1); this.renderHistory(); });
        document.getElementById('log-page-next')?.addEventListener('click', () => { this._logPage = (this._logPage || 1) + 1; this.renderHistory(); });
        document.getElementById('log-page-last')?.addEventListener('click', () => { this._logPage = 99999; this.renderHistory(); }); // will clamp
    }

    // -------------------- CHART ---------------------
    updateChart() {
        const records = this.history.getRecords(this.currentRange === 'all' ? null : this.currentRange);
        const chartEmpty = document.getElementById('chart-empty');
        const chartContainer = document.querySelector('.chart-container');

        if (records.length === 0) {
            chartEmpty.classList.remove('hidden');
            chartEmpty.style.display = 'block';
            chartContainer.style.display = 'none';
            return;
        }

        chartEmpty.style.display = 'none';
        chartContainer.style.display = 'block';

        // Risk zone backgrounds
        const subjectType = document.getElementById('subject-type').value;
        const thresholds = CONFIG.riskThresholds[subjectType];

        // Build {x: Date, y: temp} data points for proper time scale
        const dataPoints = records.map(r => ({
            x: new Date(r.timestamp),
            y: r.temperature
        }));
        const pointColors = records.map(r => {
            const risk = RiskAssessor.getRiskLevel(r.temperature, subjectType, r.conditions || 'none');
            return risk.color;
        });

        if (this.tempChart) {
            this.tempChart.data.datasets[0].data = dataPoints;
            this.tempChart.data.datasets[0].pointBackgroundColor = pointColors;
            // Clear prediction datasets when chart updates without prediction
            if (this.tempChart.data.datasets.length > 1) {
                for (let d = 1; d < this.tempChart.data.datasets.length; d++) {
                    this.tempChart.data.datasets[d].data = [];
                }
            }
            // Update annotations
            if (thresholds) {
                this.tempChart.options.plugins.annotation = this.getChartAnnotations(thresholds);
            }
            this.tempChart.update();

            // Re-run prediction overlay if we have a recent prediction
            if (this.lastPredictionResult) {
                this.updateChartWithPrediction(this.lastPredictionResult);
            }
            return;
        }

        const chartCtx = document.getElementById('temp-chart').getContext('2d');
        this.tempChart = new Chart(chartCtx, {
            type: 'line',
            data: {
                datasets: [
                    {
                        label: 'Measured Temperature',
                        data: dataPoints,
                        borderColor: '#C41E3A',
                        backgroundColor: 'rgba(196,30,58,0.1)',
                        fill: true,
                        tension: 0.3,
                        pointRadius: 5,
                        pointBackgroundColor: pointColors,
                        pointBorderColor: '#fff',
                        pointBorderWidth: 2,
                        borderWidth: 2.5,
                    },
                    {
                        label: 'Predicted Trend',
                        data: [],
                        borderColor: '#6366f1',
                        borderWidth: 2,
                        borderDash: [6, 4],
                        tension: 0.3,
                        pointRadius: 0,
                        fill: false,
                        spanGaps: true,
                    },
                    {
                        label: '95% CI Upper',
                        data: [],
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        fill: '+1',
                        backgroundColor: 'rgba(99, 102, 241, 0.1)',
                        spanGaps: true,
                    },
                    {
                        label: '95% CI Lower',
                        data: [],
                        borderColor: 'transparent',
                        borderWidth: 0,
                        pointRadius: 0,
                        fill: false,
                        spanGaps: true,
                    },
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                    mode: 'nearest',
                    axis: 'x',
                },
                scales: {
                    y: {
                        title: { display: true, text: 'Temperature (\u00B0C)', font: { size: 12 } },
                        grid: { color: '#e2e8f0' },
                    },
                    x: {
                        type: 'time',
                        time: {
                            // Smart display: Chart.js auto-picks the best unit
                            tooltipFormat: 'yyyy-MM-dd  HH:mm:ss',
                            displayFormats: {
                                second:  'HH:mm:ss',
                                minute:  'HH:mm',
                                hour:    'MMM d, HH:mm',
                                day:     'MMM d',
                                week:    'MMM d',
                                month:   'MMM yyyy',
                            },
                        },
                        title: { display: true, text: 'Date / Time', font: { size: 12 } },
                        grid: { display: false },
                        ticks: {
                            maxRotation: 45,
                            autoSkip: true,
                            maxTicksLimit: 15,
                            font: { size: 10 },
                        },
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top',
                        align: 'center',
                        labels: {
                            font: { size: 12, weight: '500' },
                            filter: function(item) {
                                // Only show Measured and Predicted in legend, hide CI bands
                                return !item.text.includes('CI');
                            },
                            usePointStyle: true,
                            pointStyle: 'circle',
                            pointStyleWidth: 10,
                            padding: 20,
                            boxWidth: 8,
                            boxHeight: 8,
                        },
                    },
                    tooltip: {
                        backgroundColor: 'rgba(30,41,59,0.9)',
                        titleFont: { size: 13 },
                        bodyFont: { size: 12 },
                        filter: function(item) {
                            // Hide CI bands from tooltip
                            return !item.dataset.label?.includes('CI');
                        },
                        callbacks: {
                            title: function(tooltipItems) {
                                // Show full date/time in tooltip header
                                if (tooltipItems.length > 0) {
                                    const raw = tooltipItems[0].raw;
                                    if (raw && raw.x) {
                                        const d = new Date(raw.x);
                                        const pad = n => String(n).padStart(2, '0');
                                        return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}  ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
                                    }
                                }
                                return '';
                            },
                            label: function(tooltipCtx) {
                                if (tooltipCtx.parsed.y === null) return null;
                                const label = tooltipCtx.dataset.label || '';
                                return `  ${label}: ${tooltipCtx.parsed.y.toFixed(2)}\u00B0C`;
                            }
                        }
                    },
                },
            }
        });
    }

    getChartAnnotations(thresholds) {
        return {
            annotations: {
                normalZone: {
                    type: 'box',
                    yMin: thresholds.normalLow,
                    yMax: thresholds.warningStart,
                    backgroundColor: 'rgba(34,197,94,0.08)',
                    borderWidth: 0,
                },
                warningZone: {
                    type: 'box',
                    yMin: thresholds.warningStart,
                    yMax: thresholds.feverStart,
                    backgroundColor: 'rgba(245,158,11,0.06)',
                    borderWidth: 0,
                },
                warningLine: {
                    type: 'line',
                    yMin: thresholds.warningStart,
                    yMax: thresholds.warningStart,
                    borderColor: 'rgba(245,158,11,0.4)',
                    borderWidth: 1,
                    borderDash: [5, 5],
                    label: {
                        display: true,
                        content: I18n.t('risk.warning'),
                        position: 'start',
                        backgroundColor: 'rgba(245,158,11,0.8)',
                        font: { size: 10 },
                    }
                },
                feverLine: {
                    type: 'line',
                    yMin: thresholds.feverStart,
                    yMax: thresholds.feverStart,
                    borderColor: 'rgba(239,68,68,0.5)',
                    borderWidth: 1.5,
                    borderDash: [5, 5],
                    label: {
                        display: true,
                        content: I18n.t('risk.fever'),
                        position: 'start',
                        backgroundColor: 'rgba(239,68,68,0.8)',
                        font: { size: 10 },
                    }
                }
            }
        };
    }

    // -------------------- EXPORT ---------------------
    exportCSV() {
        const records = this.history.records;
        if (records.length === 0) {
            alert((typeof I18n !== 'undefined') ? I18n.t('alert.noExportData') : 'No data to export.');
            return;
        }

        let csv = 'Timestamp,Patient_Name,Conditions,R,G,B,H,S,L,Wavelength_nm,Temperature_C,Risk_Level,Subject_Type,Change_C\n';
        records.forEach(r => {
            const time = new Date(r.timestamp).toISOString();
            const name = (r.patientName || '').replace(/,/g, ';');
            const cond = r.conditions || 'none';
            csv += `${time},${name},${cond},${r.rgb.r},${r.rgb.g},${r.rgb.b},${r.hsl.h},${r.hsl.s},${r.hsl.l},${r.wavelength},${r.temperature},${r.riskLevel},${r.subjectType},${r.change || 0}\n`;
        });

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `hpc_temperature_log_${new Date().toISOString().slice(0, 10)}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }

    // -------------------- HELPERS ---------------------
    setDefaultBaseline() {
        const type = document.getElementById('subject-type').value;
        const thresholds = CONFIG.riskThresholds[type];
        if (thresholds) {
            document.getElementById('baseline-temp').placeholder = `Default: ${thresholds.baseline}\u00B0C`;
        }
    }
}

// ======================= EMBEDDED TRAINING DATA =================
// Raw Data Test (21 images) — HSL Hue+Saturation polynomial model (own data)
// Model: degree-3 polynomial in H,S with cross term — MAE = 0.099°C
// TRAINING_DATA: Monotonic PCHIP (Hue→WL) + GPR Spline (WL→Temp)
// Pipeline: Image → RGB → Hue → PCHIP → Wavelength → GPR → Temperature
// Data source: 21 Raw Data Test images + GPR_Fit_Line.xlsx
// MAE = 0.024°C, RMSE = 0.077°C
const TRAINING_DATA = {
    rawTest: [
        {file:'69%-34\u2103.jpg',at:34.0,hue:187.28,wl:485.77,pt:34.000,e:0.000,ae:0.000,r:5,g:186,b:211},
        {file:'69%-34.5\u2103.jpg',at:34.5,hue:185.02,wl:488.79,pt:34.500,e:0.000,ae:0.000,r:6,g:192,b:209},
        {file:'69%-35\u2103.jpg',at:35.0,hue:182.67,wl:492.82,pt:35.000,e:0.000,ae:0.000,r:6,g:199,b:208},
        {file:'69%-35.5\u2103.jpg',at:35.5,hue:174.00,wl:497.94,pt:35.500,e:0.000,ae:0.000,r:5,g:215,b:194},
        {file:'69%-36\u2103.jpg',at:36.0,hue:168.94,wl:504.26,pt:36.000,e:0.000,ae:0.000,r:5,g:222,b:182},
        {file:'69%-36.5\u2103.jpg',at:36.5,hue:163.66,wl:511.90,pt:36.500,e:0.000,ae:0.000,r:4,g:228,b:167},
        {file:'69%-37\u2103.jpg',at:37.0,hue:157.30,wl:520.73,pt:37.000,e:0.000,ae:0.000,r:7,g:229,b:145},
        {file:'69%-37.5\u2103.jpg',at:37.5,hue:155.78,wl:529.98,pt:37.500,e:0.000,ae:0.000,r:11,g:229,b:141},
        {file:'69%-38\u2103.jpg',at:38.0,hue:150.59,wl:538.47,pt:38.000,e:0.000,ae:0.000,r:28,g:230,b:131},
        {file:'69%-38.5\u2103.jpg',at:38.5,hue:121.69,wl:545.31,pt:38.500,e:0.000,ae:0.000,r:88,g:230,b:92},
        {file:'69%-39\u2103.jpg',at:39.0,hue:97.59,wl:550.33,pt:39.000,e:0.000,ae:0.000,r:124,g:228,b:62},
        {file:'69%-39.5\u2103.jpg',at:39.5,hue:89.66,wl:554.14,pt:39.500,e:0.000,ae:0.000,r:143,g:230,b:54},
        {file:'69%-40\u2103.jpg',at:40.0,hue:80.11,wl:557.59,pt:40.000,e:0.000,ae:0.000,r:164,g:227,b:39},
        {file:'69%-40.5\u2103.jpg',at:40.5,hue:67.35,wl:561.28,pt:40.500,e:0.000,ae:0.000,r:196,g:221,b:17},
        {file:'69%-41\u2103.jpg',at:41.0,hue:54.35,wl:565.52,pt:41.000,e:0.000,ae:0.000,r:228,g:207,b:5},
        {file:'69%-41.5\u2103.jpg',at:41.5,hue:45.49,wl:572.24,pt:41.738,e:+0.238,ae:0.238,r:249,g:190,b:5},
        {file:'69%-42\u2103.jpg',at:42.0,hue:46.87,wl:572.24,pt:41.738,e:-0.262,ae:0.262,r:242,g:191,b:9},
        {file:'69%-42.5\u2103.jpg',at:42.5,hue:44.93,wl:577.66,pt:42.500,e:0.000,ae:0.000,r:241,g:184,b:14},
        {file:'69%-43\u2103.jpg',at:43.0,hue:37.47,wl:579.98,pt:43.000,e:0.000,ae:0.000,r:252,g:166,b:23},
        {file:'69%-43.5\u2103.jpg',at:43.5,hue:35.09,wl:581.61,pt:43.500,e:0.000,ae:0.000,r:251,g:163,b:39},
        {file:'69%-44\u2103.jpg',at:44.0,hue:33.69,wl:582.79,pt:44.000,e:0.000,ae:0.000,r:251,g:162,b:48},
    ],
    metrics: {
        mae: 0.024, rmse: 0.077, maxError: 0.262, samples: 21
    }
};


// ======================= VALIDATION DISPLAY =====================
class ValidationDisplay {
    static charts = {};
    static batchBound = false;

    static init() {
        const section = document.getElementById('validation-section');
        if (!section) return;

        this.renderMetrics();
        this.renderScatterChart();
        this.renderErrorChart();
        this.renderTestTable();
    }

    static renderMetrics() {
        const m = TRAINING_DATA.metrics;
        document.getElementById('val-mae').textContent = m.mae.toFixed(3) + '\u00B0C';
        document.getElementById('val-rmse').textContent = m.rmse.toFixed(3) + '\u00B0C';
        document.getElementById('val-max-error').textContent = m.maxError.toFixed(3) + '\u00B0C';
        document.getElementById('val-samples').textContent = m.samples;
    }

    static renderScatterChart() {
        const ctx = document.getElementById('scatter-chart');
        if (!ctx) return;

        const data = TRAINING_DATA.rawTest;
        const minT = 33, maxT = 45;

        if (this.charts.scatter) this.charts.scatter.destroy();
        this.charts.scatter = new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [
                    {
                        label: 'Measured vs Predicted (21 pts)',
                        data: data.map(d => ({x: d.at, y: d.pt})),
                        backgroundColor: '#C41E3A',
                        pointRadius: 6,
                        pointHoverRadius: 8,
                        pointBorderColor: '#fff',
                        pointBorderWidth: 1.5,
                    },
                    {
                        label: 'Perfect Agreement (y = x)',
                        data: [{x: minT, y: minT}, {x: maxT, y: maxT}],
                        type: 'line', borderColor: '#94a3b8', borderWidth: 1.5,
                        borderDash: [6, 3], pointRadius: 0, fill: false,
                    },
                ]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'center',
                        labels: {
                            usePointStyle: true,
                            pointStyle: 'circle',
                            font: { size: 12, weight: '500' },
                            padding: 20,
                            boxWidth: 8,
                            boxHeight: 8,
                        },
                    },
                    title: { display: true, text: 'Actual vs Predicted Temperature (PCHIP + GPR)', font: { size: 13, weight: 600 }, padding: { bottom: 12 } },
                    tooltip: {
                        callbacks: {
                            label: function(ctx) {
                                const d = data[ctx.dataIndex];
                                if (!d) return ctx.formattedValue;
                                return `Actual: ${d.at}\u00B0C  Predicted: ${d.pt.toFixed(2)}\u00B0C  Error: ${d.e >= 0 ? '+' : ''}${d.e.toFixed(3)}\u00B0C`;
                            }
                        }
                    }
                },
                scales: {
                    x: { title: { display: true, text: 'Actual Temperature (\u00B0C)' }, min: minT, max: maxT },
                    y: { title: { display: true, text: 'Predicted Temperature (\u00B0C)' }, min: minT, max: maxT },
                },
            }
        });
    }

    static renderErrorChart() {
        const ctx = document.getElementById('error-chart');
        if (!ctx) return;

        const data = TRAINING_DATA.rawTest;
        // Bin errors — fine bins matching PCHIP+GPR model accuracy
        const bins = [0, 0.001, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3];
        const counts = new Array(bins.length).fill(0);
        data.forEach(d => {
            for (let i = bins.length - 1; i >= 0; i--) {
                if (d.ae >= bins[i]) { counts[i]++; break; }
            }
        });
        const labels = bins.map((b, i) => i < bins.length - 1 ? `${b}\u2013${bins[i+1]}` : `>${b}`);

        if (this.charts.error) this.charts.error.destroy();
        this.charts.error = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Count',
                    data: counts,
                    backgroundColor: counts.map((_, i) => {
                        const colors = ['#22c55e','#22c55e','#22c55e','#eab308','#eab308','#f97316','#ef4444','#991b1b'];
                        return colors[i] || '#991b1b';
                    }),
                    borderRadius: 4,
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: 'Absolute Error Distribution (\u00B0C)', font: { size: 13, weight: 600 } },
                },
                scales: {
                    x: { title: { display: true, text: 'Error Range (\u00B0C)' } },
                    y: { title: { display: true, text: 'Count' }, beginAtZero: true, ticks: { stepSize: 1 } },
                },
            }
        });
    }

    static renderTestTable() {
        const tbody = document.getElementById('val-test-tbody');
        if (!tbody) return;
        tbody.innerHTML = '';

        TRAINING_DATA.rawTest.forEach((r, idx) => {
            const tr = document.createElement('tr');
            const errClass = r.ae <= 0.15 ? 'td-change-down' : (r.ae <= 0.3 ? 'td-change-neutral' : 'td-change-up');
            tr.innerHTML = `
                <td>${idx + 1}</td>
                <td title="${r.file}">${r.at}\u00B0C</td>
                <td><span class="td-color-dot" style="background:rgb(${r.r},${r.g},${r.b})"></span></td>
                <td>${r.wl.toFixed(1)} nm</td>
                <td>${r.at}\u00B0C</td>
                <td>${r.pt.toFixed(3)}\u00B0C</td>
                <td class="${errClass}">${r.e >= 0 ? '+' : ''}${r.e.toFixed(3)}\u00B0C</td>
                <td>${r.ae.toFixed(3)}\u00B0C</td>
            `;
            tbody.appendChild(tr);
        });
    }

    static readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    static loadImage(dataUrl) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = dataUrl;
        });
    }
}


// ======================= FACE ENGINE (Custom SVG Faces) ==========
/**
 * Generates custom SVG face expressions for health status visualization.
 * Simplified 3-level system matching risk zones:
 *   happy   → Normal  (< warningStart)  — smiley face, green
 *   neutral → Warning (warningStart … feverStart) — no expression, amber
 *   crying  → Fever   (≥ feverStart)   — crying face, red
 * Uses pure SVG paths (no Unicode emojis).
 */
class FaceEngine {
    static FACES = {
        waiting: {
            bgFill: '#E0E0E0', bgStroke: '#BDBDBD', eyeFill: '#757575', mouthColor: '#757575',
            mouthPath: 'M 42 75 L 78 75',
            label: 'Waiting...', labelColor: '#757575'
        },
        happy: {
            bgFill: '#E8F5E9', bgStroke: '#4CAF50', eyeFill: '#2E7D32', mouthColor: '#2E7D32',
            mouthPath: 'M 36 68 Q 60 92 84 68',
            leftBrow: null, rightBrow: null,
            label: 'Normal', labelColor: '#2E7D32'
        },
        neutral: {
            bgFill: '#FFF8E1', bgStroke: '#F59E0B', eyeFill: '#92400E', mouthColor: '#92400E',
            mouthPath: 'M 40 76 L 80 76',
            leftBrow: null, rightBrow: null,
            label: 'Warning', labelColor: '#D97706'
        },
        crying: {
            bgFill: '#FFEBEE', bgStroke: '#EF4444', eyeFill: '#B91C1C', mouthColor: '#B91C1C',
            mouthPath: 'M 36 84 Q 60 68 84 84',
            leftBrow: 'M 30 36 L 52 42', rightBrow: 'M 68 42 L 90 36',
            label: 'Fever', labelColor: '#B91C1C',
            // Tear drops
            extras: '<ellipse cx="34" cy="60" rx="3" ry="6" fill="#64B5F6" opacity="0.8"/>'
                  + '<ellipse cx="86" cy="60" rx="3" ry="6" fill="#64B5F6" opacity="0.8"/>'
        }
    };

    /**
     * Map risk level (0–2) to face key:
     *   0 → happy   (smiley)
     *   1 → neutral (no expression)
     *   2 → crying  (sad face with tears)
     */
    static levelToFace(level) {
        if (level <= 0) return 'happy';
        if (level === 1) return 'neutral';
        return 'crying'; // 2+
    }

    /**
     * Generate SVG string for a face
     */
    static generateSVG(faceKey, size = 120) {
        const f = this.FACES[faceKey] || this.FACES.waiting;
        let svg = `<svg viewBox="0 0 120 120" width="${size}" height="${size}" class="face-svg">`;

        // Background circle
        svg += `<circle cx="60" cy="60" r="56" fill="${f.bgFill}" stroke="${f.bgStroke}" stroke-width="3"/>`;

        // Eyebrows (if present)
        if (f.leftBrow) {
            svg += `<path d="${f.leftBrow}" stroke="${f.eyeFill}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
            svg += `<path d="${f.rightBrow}" stroke="${f.eyeFill}" stroke-width="3" fill="none" stroke-linecap="round"/>`;
        }

        // Eyes
        if (faceKey === 'happy') {
            // Happy curved eyes (smiley)
            svg += `<path d="M 34 48 Q 42 40 50 48" stroke="${f.eyeFill}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
            svg += `<path d="M 70 48 Q 78 40 86 48" stroke="${f.eyeFill}" stroke-width="3.5" fill="none" stroke-linecap="round"/>`;
        } else if (faceKey === 'crying') {
            // Sad eyes — slightly narrowed with tear trail
            svg += `<circle cx="42" cy="48" r="5" fill="${f.eyeFill}"/>`;
            svg += `<circle cx="78" cy="48" r="5" fill="${f.eyeFill}"/>`;
        } else {
            // Standard dot eyes (neutral / waiting)
            svg += `<circle cx="42" cy="48" r="5" fill="${f.eyeFill}"/>`;
            svg += `<circle cx="78" cy="48" r="5" fill="${f.eyeFill}"/>`;
        }

        // Mouth
        if (f.mouthOverride) {
            svg += f.mouthOverride;
        } else {
            svg += `<path d="${f.mouthPath}" fill="none" stroke="${f.mouthColor}" stroke-width="4" stroke-linecap="round"/>`;
        }

        // Extras (sweat drops, etc.)
        if (f.extras) svg += f.extras;

        // Cheek blush for happy (smiley)
        if (faceKey === 'happy') {
            svg += `<circle cx="30" cy="66" r="7" fill="#A5D6A7" opacity="0.3"/>`;
            svg += `<circle cx="90" cy="66" r="7" fill="#A5D6A7" opacity="0.3"/>`;
        }

        svg += '</svg>';
        return svg;
    }
}

// ======================= SIMPLE MODE UI ============================
class SimpleUI {
    static currentStep = 1;
    static isSimple = true;

    static init() {
        // Start in simple mode
        const modeSwitch = document.getElementById('mode-switch');
        if (!modeSwitch) return;

        // Default: simple mode (checkbox unchecked = simple)
        this.setMode(true);

        modeSwitch.addEventListener('change', () => {
            this.setMode(!modeSwitch.checked);
        });

        // Read aloud button
        const readBtn = document.getElementById('btn-read-aloud');
        if (readBtn) readBtn.addEventListener('click', () => this.readAloud());

        // Urgent banner buttons
        const urgentRead = document.getElementById('urgent-btn-read');
        if (urgentRead) urgentRead.addEventListener('click', () => this.readAloud());
        const urgentDismiss = document.getElementById('urgent-btn-dismiss');
        if (urgentDismiss) urgentDismiss.addEventListener('click', () => {
            document.getElementById('sticky-urgent').style.display = 'none';
        });

        // Set initial face
        this.updateFace('waiting');
    }

    static setMode(isSimple) {
        this.isSimple = isSimple;
        const body = document.body;
        const label = document.getElementById('mode-label');
        const modeSwitch = document.getElementById('mode-switch');
        const t = (k) => (typeof I18n !== 'undefined') ? I18n.t(k) : k;

        if (isSimple) {
            body.classList.add('simple-mode');
            if (label) label.textContent = t('mode.simple');
            if (modeSwitch) modeSwitch.checked = false;
        } else {
            body.classList.remove('simple-mode');
            if (label) label.textContent = t('mode.advanced');
            if (modeSwitch) modeSwitch.checked = true;
        }
    }

    /**
     * Update the main health status card
     */
    static updateStatus(temperature, riskLevel, trend, aiResult, subjectType) {
        const card = document.getElementById('health-status-card');
        if (!card) return;

        // Determine face
        const faceKey = FaceEngine.levelToFace(riskLevel.level);
        this.updateFace(faceKey);

        // Update card background class (3-level)
        card.className = 'health-status-card';
        if (riskLevel.level === 0) card.classList.add('status-normal');
        else if (riskLevel.level === 1) card.classList.add('status-warning');
        else card.classList.add('status-fever');

        // Temperature text
        document.getElementById('status-temp').textContent = `${temperature.toFixed(1)}\u00B0C`;

        // Status label (translated face label)
        const face = FaceEngine.FACES[faceKey];
        const labelEl = document.getElementById('status-label');
        const t = (k, r) => (typeof I18n !== 'undefined') ? I18n.t(k, r) : k;
        labelEl.textContent = t('face.' + faceKey, {}) || face.label;
        labelEl.style.color = face.labelColor;
        labelEl.dataset.faceKey = faceKey; // store for re-translation on lang switch

        // Message - simple, clear language
        const msg = this.getSimpleMessage(riskLevel, trend, subjectType);
        document.getElementById('status-message').textContent = msg;

        // Time
        const _now = new Date();
        const _pad = n => String(n).padStart(2, '0');
        const _fullTime = `${_now.getFullYear()}-${_pad(_now.getMonth()+1)}-${_pad(_now.getDate())} ${_pad(_now.getHours())}:${_pad(_now.getMinutes())}:${_pad(_now.getSeconds())}`;
        document.getElementById('status-time').textContent =
            t('status.lastChecked') + ' ' + _fullTime;

        // Step guide
        this.setStep(3); // We have a result now => step 3

        // Urgent banner for high/very high
        this.updateUrgentBanner(riskLevel, trend, temperature);
    }

    static getSimpleMessage(riskLevel, trend, subjectType) {
        const t = (k, r) => (typeof I18n !== 'undefined') ? I18n.t(k, r) : k;
        const isAnimal = subjectType.startsWith('animal');
        const Subject  = isAnimal ? t('simple.pet')        : t('simple.patient');
        const doctor   = isAnimal ? t('simple.vet')        : t('simple.doctor');
        const medical  = isAnimal ? t('simple.veterinary') : t('simple.medical');

        switch (riskLevel.level) {
            case 0: // Normal
                return t('simple.normal', { Subject });
            case 1: // Warning (37–38 °C)
                return t('simple.warning');
            case 2: // Fever (≥ 38 °C)
            default:
                if (trend && trend.trend === 'rapid-rise')
                    return t('simple.feverRapid', { doctor });
                return t('simple.feverMsg', { medical });
        }
    }

    static updateFace(faceKey) {
        // Main face — compact size for clean UI
        const faceEl = document.getElementById('status-face');
        if (faceEl) faceEl.innerHTML = FaceEngine.generateSVG(faceKey, 56);
    }

    static updateUrgentBanner(riskLevel, trend, temperature) {
        const banner = document.getElementById('sticky-urgent');
        if (!banner) return;
        const t = (k, r) => (typeof I18n !== 'undefined') ? I18n.t(k, r) : k;

        // Show urgent banner only for Fever (level 2)
        if (riskLevel.level >= 2) {
            banner.style.display = 'flex';
            const faceKey = FaceEngine.levelToFace(riskLevel.level);
            document.getElementById('urgent-face').innerHTML = FaceEngine.generateSVG(faceKey, 36);
            document.getElementById('urgent-title').textContent =
                t('urgent.fever', { temp: temperature.toFixed(1) });
            document.getElementById('urgent-subtitle').textContent =
                trend && trend.trend === 'rapid-rise'
                    ? t('urgent.rapidRise')
                    : t('urgent.actNow');
        } else {
            banner.style.display = 'none';
        }
    }

    static setStep(step) {
        this.currentStep = step;
        for (let i = 1; i <= 3; i++) {
            const circle = document.getElementById(`step-g-${i}`);
            const label = document.getElementById(`step-l-${i}`);
            if (!circle || !label) continue;
            circle.className = 'step-circle';
            label.className = 'step-guide-label';
            if (i < step) {
                circle.classList.add('done');
                circle.textContent = '\u2713'; // checkmark
                label.classList.add('done');
            } else if (i === step) {
                circle.classList.add('active');
                circle.textContent = i;
                label.classList.add('active');
            } else {
                circle.textContent = i;
            }
        }
        // Also set step lines
        const lines = document.querySelectorAll('.step-line');
        lines.forEach((line, idx) => {
            line.className = 'step-line';
            if (idx + 1 < step) line.classList.add('done');
        });
    }

    /**
     * Read current status aloud using Web Speech API
     */
    static readAloud() {
        if (!('speechSynthesis' in window)) {
            const t = (k) => (typeof I18n !== 'undefined') ? I18n.t(k) : k;
            alert(t('tts.unsupported'));
            return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        const temp = document.getElementById('status-temp').textContent;
        const message = document.getElementById('status-message').textContent;
        const label = document.getElementById('status-label').textContent;

        const t = (k, r) => (typeof I18n !== 'undefined') ? I18n.t(k, r) : k;
        const text = t('speech.tempIs', { temp, status: label, message });

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        // Select voice matching the current i18n language
        const voiceLang = (typeof I18n !== 'undefined') ? I18n.getVoiceLang() : 'en';
        const voices = window.speechSynthesis.getVoices();
        const matchVoice = voices.find(v => v.lang.startsWith(voiceLang))
                        || voices.find(v => v.lang.startsWith('en'));
        if (matchVoice) utterance.voice = matchVoice;
        utterance.lang = voiceLang;

        window.speechSynthesis.speak(utterance);
    }
}


// ======================= INITIALIZE =============================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18n first (sets language, applies translations to static HTML)
    if (typeof I18n !== 'undefined') I18n.init();

    window.app = new App();
    // Initialize Simple UI
    SimpleUI.init();
    // Initialize LLM Engine (loads saved settings, binds UI)
    LLMEngine.init();
    // Initialize validation display after app is ready
    setTimeout(() => ValidationDisplay.init(), 500);
});
