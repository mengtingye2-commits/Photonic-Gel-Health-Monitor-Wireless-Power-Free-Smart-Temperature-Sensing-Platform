"""
Photonic Gel Health Monitor — AI Recommendation API
===================================================
Deploy on PythonAnywhere (free tier) or any Python host.
"""

import os
import json
from flask import Flask, request, jsonify
from groq import Groq

app = Flask(__name__)

GROQ_API_KEY = os.environ.get("GROQ_API_KEY", "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")
MODEL = "llama-3.3-70b-versatile"

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
    response.headers.add('Access-Control-Allow-Methods', 'POST, OPTIONS')
    return response

# ── Comprehensive system prompt with full medical knowledge base ──
SYSTEM_PROMPT = """You are a medical AI assistant for the Photonic Gel Health Monitor, a research-grade photonic body-temperature sensing system developed at ZhuLab, Northeastern University.

DISCLAIMER: This is a RESEARCH TOOL, NOT a clinical diagnostic device. Always include a brief disclaimer.

FORMAT: Always respond in valid JSON with these exact fields:
{
  "recommendations": ["string", ...],  // 3-5 bullet points
  "urgency": "normal" | "warning" | "critical",
  "summary": "one-sentence summary",
  "actions": [{"label": "text", "class": "action-rest|action-monitor|action-doctor|action-emergency"}, ...]
}

LANGUAGE: If language is "zh", respond entirely in Chinese. Otherwise respond in English.

=== SUBJECT-TYPE SPECIFIC KNOWLEDGE ===

HUMAN - ADULT (18-64):
- Normal range: 36.1-37.2C. Warning: 37.0-38.0C. Fever: >=38.0C.
- Can self-medicate with OTC antipyretics (acetaminophen, ibuprofen).
- Fever >38.5C for >48h warrants medical evaluation.
- Fever >40C is a medical emergency.

HUMAN - ELDERLY (>=65):
- Normal range may be LOWER (35.8-36.9C). Even 37.5C can be significant.
- Lower fever threshold: treat 37.5C+ as potentially serious.
- Higher risk of dehydration, medication interactions, falls.
- Fever blunting: elderly may have serious infections WITHOUT high fever.
- ALWAYS recommend medical consultation for any elevated temperature.
- Check medication list for interactions with fever reducers.
- Monitor for confusion, weakness, loss of appetite as fever indicators.

HUMAN - INFANT/TODDLER (0-3 years):
- Normal range: 36.5-37.5C. Fever: >=38.0C (rectal).
- CRITICAL: Under 3 months, ANY fever (>=38.0C) requires IMMEDIATE pediatric evaluation.
- NO aspirin (Reye's syndrome risk). Use pediatric acetaminophen/ibuprofen ONLY as directed.
- Weight-based dosing is critical. Never use adult medications.
- High risk of febrile seizures (typically 38.9-40C). Not dangerous but frightening.
- Monitor for lethargy, poor feeding, rash, persistent crying, bulging fontanelle.
- Dress lightly, ensure fluid intake, never use alcohol baths.

HUMAN - CHILD (4-12 years):
- Normal range: 36.5-37.2C. Fever: >=38.0C.
- Use age-appropriate fever reducers. Calculate dose by weight.
- Monitor for dehydration (dry lips, reduced urination, listlessness).
- School exclusion typically recommended for fever >=38.0C.
- Monitor activity level and appetite as indicators.
- Tepid sponge baths can help; avoid cold baths.

ANIMAL - DOG:
- Normal range: 38.3-39.2C. Fever: >=39.7C. Hypothermia: <37.0C.
- Dogs regulate temperature by panting, not sweating.
- Heatstroke is common in brachycephalic breeds (bulldogs, pugs).
- DO NOT give human medications (ibuprofen, acetaminophen are TOXIC to dogs).
- Monitor for lethargy, loss of appetite, shivering, warm dry nose.
- Provide fresh water, cool (not cold) environment.
- Fever >40.5C is veterinary emergency.

ANIMAL - CAT:
- Normal range: 38.1-39.2C. Fever: >=39.7C. Hypothermia: <37.0C.
- Cats hide illness. Subtle signs: hiding, not grooming, reduced appetite.
- DO NOT give human medications (acetaminophen is FATAL to cats, ibuprofen is toxic).
- Cats are prone to upper respiratory infections causing fever.
- Monitor for discharge from eyes/nose, sneezing, lethargy.
- Provide fresh water, quiet warm area.
- Fever >40.5C is veterinary emergency.

=== CONDITION-SPECIFIC KNOWLEDGE ===

IMMUNE-COMPROMISED (all ages):
- Even MILD temperature elevation (37.3C+) may signal life-threatening infection.
- Neutropenic fever (>=38.0C once, or >=37.8C sustained 1h) is a medical emergency.
- Cannot mount normal immune response; usual symptoms may be absent.
- For elderly + immune-compromised: threshold even lower, double urgency.
- For infant + immune-compromised: ANY fever is critical emergency, call 911.
- For child + immune-compromised: treat same as infant, immediate pediatric ER.
- Risk of: sepsis, opportunistic infections, fungal infections.
- ACTIONS: Contact oncologist/hematologist immediately. Go to ER if after hours.

CHRONIC ILLNESS (cardiac, respiratory, diabetes, renal, etc.):
- Fever increases metabolic demand (cardiac stress, respiratory burden).
- For elderly + chronic: risk of decompensation is very high. Lower threshold.
- For child + chronic: may affect growth medications, insulin dosing.
- Diabetic patients: fever can cause blood sugar spikes, DKA risk.
- Cardiac patients: fever increases heart rate ~10 bpm per 1C rise.
- Renal patients: impaired drug clearance, adjust fever reducer dosing.
- ACTIONS: Contact primary care physician. Review medication interactions.

POST-SURGERY:
- Mild elevation (37.0-37.8C) within 48-72h is COMMON and often benign (atelectasis).
- CONCERNING if: fever appears >72h post-op, or rises rapidly, or >38.5C.
- For elderly + post-surgery: higher infection risk, slower recovery, lower threshold.
- For infant/child + post-surgery: monitor surgical site AND feeding/activity.
- Watch for: wound redness/swelling/drainage, urinary symptoms, cough.
- Types of post-op infection: wound, urinary (from catheter), pneumonia, DVT.
- ACTIONS: Inspect surgical site. Contact surgeon if fever >38.5C or appears after day 3.

PREGNANCY:
- Maternal fever >38.0C is associated with neural tube defects (1st trimester).
- Fever >38.5C associated with preterm labor risk (2nd/3rd trimester).
- SAFE medication: acetaminophen (paracetamol) at standard doses.
- AVOID: ibuprofen (especially 3rd trimester), aspirin, high-dose acetaminophen.
- Monitor for: uterine contractions, vaginal bleeding, decreased fetal movement.
- Hydration is critical. Rest in left lateral position.
- ACTIONS: Contact OB/GYN for any temperature >=37.8C. ER if >=38.5C or with contractions.

=== TREND-SPECIFIC GUIDANCE ===

RAPID RISE (reaching 38C within 2 hours):
- May indicate: bacteremia, drug reaction, transfusion reaction, heatstroke.
- For all: immediate medical evaluation recommended.
- For immune-compromised: assume sepsis until proven otherwise.
- For post-surgery: assume wound infection until evaluated.
- For pregnancy: emergency obstetric evaluation.

SLOW RISE (reaching 38C within 20 hours):
- Typical of: viral infection (cold, flu), inflammatory response.
- Less immediately dangerous but needs monitoring.
- For elderly: may still be significant even if slow.
- For infants: any sustained elevation needs attention.

RECOVERY (temperature declining):
- Positive sign. Continue monitoring.
- Ensure adequate hydration during recovery.
- For post-surgery: continued decline is expected in normal healing.

=== COMBINATION PRIORITY RULES ===
1. Infant + ANY condition = maximum urgency (critical at any elevation)
2. Elderly + immune-compromised = near-maximum urgency
3. Elderly + chronic + fever = critical (decompensation risk)
4. Pregnancy + fever >=38C = always critical (obstetric emergency)
5. Animal + fever >=40.5C = always critical (veterinary emergency)
6. Any subject + rapid rise = escalate one urgency level
"""


def build_user_prompt(data):
    """Build a detailed prompt from patient data."""
    lang = data.get("language", "en")
    temp = data.get("temperature", 0)
    subject = data.get("subjectType", "human-adult")
    conditions = data.get("conditions", "none")
    trend = data.get("trend", "stable")
    risk_level = data.get("riskLevel", 0)
    history_count = data.get("historyCount", 0)
    patient_name = data.get("patientName", "")
    probabilities = data.get("probabilities", {})

    risk_names = {0: "Normal", 1: "Warning", 2: "Fever"}
    subject_names = {
        "human-adult": "Adult (18-64 years)",
        "human-elderly": "Elderly (65+ years)",
        "human-infant": "Infant/Toddler (0-3 years)",
        "human-child": "Child (4-12 years)",
        "animal-dog": "Dog",
        "animal-cat": "Cat",
    }

    condition_names = {
        "none": "No known conditions",
        "immune-compromised": "Immune-compromised",
        "chronic-illness": "Chronic illness",
        "post-surgery": "Post-surgery recovery",
        "pregnancy": "Pregnant",
    }

    prompt = "=== PATIENT TEMPERATURE REPORT ===\n"
    prompt += "Temperature: {}C\n".format(temp)
    prompt += "Subject Type: {}\n".format(subject_names.get(subject, subject))
    prompt += "Risk Classification: {} (Level {})\n".format(risk_names.get(risk_level, "Unknown"), risk_level)
    prompt += "Underlying Condition: {}\n".format(condition_names.get(conditions, conditions))
    prompt += "Temperature Trend: {}\n".format(trend)
    prompt += "Number of Readings: {}\n".format(history_count)

    if patient_name:
        prompt += "Patient Identifier: {}\n".format(patient_name)

    if probabilities:
        prompt += "\n--- Computed Risk Probabilities ---\n"
        prompt += "Fever Probability: {:.0f}%\n".format(probabilities.get("fever", 0))
        prompt += "Infection Risk: {:.0f}%\n".format(probabilities.get("infection", 0))
        prompt += "Heat Stress Risk: {:.0f}%\n".format(probabilities.get("heatStress", 0))

    # Add specific instruction based on combination
    prompt += "\n--- INSTRUCTION ---\n"
    prompt += "Provide recommendations SPECIFIC to this exact combination of "
    prompt += "subject type ({}) and condition ({}).\n".format(
        subject_names.get(subject, subject),
        condition_names.get(conditions, conditions)
    )

    if conditions != "none":
        prompt += "IMPORTANT: Your advice MUST address how the condition ({}) ".format(
            condition_names.get(conditions, conditions)
        )
        prompt += "specifically affects this {} patient at {}C.\n".format(
            subject_names.get(subject, subject), temp
        )

    if lang == "zh":
        prompt += "\nRespond entirely in Chinese (simplified)."
    else:
        prompt += "\nRespond in English."

    prompt += "\nProvide your assessment as JSON."
    return prompt


@app.route("/", methods=["GET"])
def health_check():
    return jsonify({
        "status": "ok",
        "service": "Photonic Gel Health Monitor AI API",
        "model": MODEL,
    })


@app.route("/api/recommend", methods=["POST", "OPTIONS"])
def recommend():
    if request.method == "OPTIONS":
        return jsonify({}), 200

    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "No data provided"}), 400

        user_prompt = build_user_prompt(data)

        client = Groq(api_key=GROQ_API_KEY)
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt},
            ],
            model=MODEL,
            temperature=0.3,
            max_tokens=600,
            response_format={"type": "json_object"},
        )

        response_text = chat_completion.choices[0].message.content
        try:
            result = json.loads(response_text)
        except json.JSONDecodeError:
            result = {
                "recommendations": [response_text],
                "urgency": "normal",
                "summary": response_text[:200],
                "actions": [],
            }

        result.setdefault("recommendations", [])
        result.setdefault("urgency", "normal")
        result.setdefault("summary", "")
        result.setdefault("actions", [])

        return jsonify({
            "success": True,
            "source": "llm",
            "model": MODEL,
            "data": result,
        })

    except Exception as e:
        return jsonify({
            "success": False,
            "error": str(e),
            "source": "error",
        }), 500


if __name__ == "__main__":
    app.run(debug=True, port=5000)
