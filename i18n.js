/* ================================================================
   i18n — Internationalization Engine
   Photonic Gel Health Monitor — ZhuLab@NEU
   Supports 2 languages (English, Chinese)
   ================================================================ */

const I18N_LANGUAGES = {
    en: { name: 'English',    flag: 'EN', dir: 'ltr', voice: 'en' },
    zh: { name: '中文',       flag: '中', dir: 'ltr', voice: 'zh' },
};

// ======================= TRANSLATION DICTIONARIES =================
const I18N_STRINGS = {
// ---- ENGLISH (base) ----
en: {
    // Header
    'app.title': 'Photonic Gel Health Monitor',
    'app.subtitle': 'Wireless Power-Free Smart Temperature Sensing Platform',
    'header.accuracy': 'Accuracy',
    'header.speed': 'Speed',
    'mode.simple': 'Simple',
    'mode.advanced': 'Advanced',

    // Health Status Card
    'status.waiting': 'Waiting for reading...',
    'status.temp.default': '--.-\u00B0C',
    'status.message.default': 'Take a photo of the sensor to check temperature',
    'status.readAloud': 'Read Aloud',
    'status.lastChecked': 'Last checked:',

    // Faces (keyed by FaceEngine faceKey — 3-tier system)
    'face.waiting': 'Waiting...',
    'face.happy': 'All Good',
    'face.neutral': 'Warning',
    'face.crying': 'Fever',

    // Step Guide
    'step.1': 'Take Photo',
    'step.2': 'See Result',
    'step.3': 'Follow Advice',

    // Urgent Banner (3-tier)
    'urgent.readAloud': 'Read Aloud',
    'urgent.fever': 'FEVER: {temp}\u00B0C \u2014 Seek medical attention',
    'urgent.rapidRise': 'Temperature is rising rapidly. Do not ignore this.',
    'urgent.actNow': 'Please act on the recommendations below.',

    // Subject Profile
    'profile.title': 'Subject Profile',
    'profile.subjectType': 'Subject Type',
    'profile.humanAdult': 'Human \u2014 Adult',
    'profile.humanElderly': 'Human \u2014 Elderly (\u226565)',
    'profile.humanInfant': 'Human \u2014 Infant/Toddler (0\u20133)',
    'profile.humanChild': 'Human \u2014 Child (4\u201312)',
    'profile.animalDog': 'Animal \u2014 Dog',
    'profile.animalCat': 'Animal \u2014 Cat',
    'profile.name': 'Name / ID (optional)',
    'profile.namePlaceholder': 'e.g., Patient A, Buddy',
    'profile.baseline': 'Baseline Temperature (\u00B0C)',
    'profile.baselinePlaceholder': 'Auto-set by type',
    'profile.conditions': 'Known Conditions',
    'profile.condNone': 'None',
    'profile.condImmune': 'Immune-compromised',
    'profile.condChronic': 'Chronic illness',
    'profile.condSurgery': 'Post-surgery',
    'profile.condPregnancy': 'Pregnancy',

    // Image Capture
    'capture.title': 'Image Capture',
    'capture.camera': 'Camera',
    'capture.upload': 'Upload',
    'capture.startCamera': 'Start Camera',
    'capture.captureAnalyze': 'Capture & Analyze',
    'capture.stopCamera': 'Stop Camera',
    'capture.cameraPrompt': 'Click "Start Camera" to begin',
    'capture.dragDrop': 'Drag & drop an image here or click to browse',
    'capture.supports': 'Supports: JPG, PNG, BMP, WebP',
    'capture.selectRegion': 'Select Sensor Region (click & drag)',
    'capture.analyzeColor': 'Analyze Color',
    'capture.resetSelection': 'Reset Selection',
    'capture.clearImage': 'Clear Image',

    // Results
    'results.title': 'Analysis Results',
    'results.detectedColor': 'Detected Color',
    'results.wavelength': 'Dominant Wavelength',
    'results.bodyTemp': 'Body Temperature',
    'results.riskLevel': 'Risk Level',
    'risk.normal': 'Normal',
    'risk.warning': 'Warning',
    'risk.fever': 'Fever',

    // Chart
    'chart.title': 'Temperature History',
    'chart.clear': 'Clear',
    'chart.empty': 'No temperature readings recorded yet.',
    'chart.emptyHint': 'Capture and analyze an image to begin monitoring.',

    // Prediction
    'prediction.title': 'Temperature Prediction (RNN)',
    'prediction.forecast': '{min}-min forecast',
    'prediction.runPrediction': 'Run Prediction',
    'prediction.minReadings': 'Minimum 3 temperature readings required for prediction. Current readings:',
    'prediction.feverOnset': 'Predicted Fever Onset',
    'prediction.modelPerf': 'Model Performance',
    'prediction.activeModel': 'Active Model',
    'prediction.ensembleWt': 'Ensemble Weights',
    'prediction.mae': 'MAE (\u00B0C)',
    'prediction.trainSamples': 'Training Samples',

    // AI Recommendations
    'ai.title': 'AI Health Assessment',
    'ai.think': 'Think',
    'ai.analyze': 'Analyze',
    'ai.decide': 'Decide',
    'ai.recommendations': 'Recommendations',

    // Measurement Log
    'log.title': 'Measurement Log',
    'log.export': 'Export CSV',
    'log.colNum': '#',
    'log.colTime': 'Time',
    'log.colPatient': 'Patient',
    'log.colCondition': 'Condition',
    'log.colColor': 'Color',
    'log.colWavelength': 'Wavelength',
    'log.colTemp': 'Temp (\u00B0C)',
    'log.colChange': 'Change',
    'log.colRisk': 'Risk',
    'log.colTrend': 'Trend',
    'log.colSpeed': 'Speed',
    'log.empty': 'No measurements recorded yet.',

    // Probability Indicators
    'prob.title': 'Health Risk Probabilities',
    'prob.fever': 'Probability of Fever',
    'prob.infection': 'Probability of Infection Risk',
    'prob.heatStress': 'Probability of Heat Stress',

    // Validation
    'val.title': 'Validation & Error Analysis',
    'val.maxError': 'Max Error',
    'val.testSamples': 'Test Samples',
    'val.rawTitle': 'Raw Data Test \u2014 21 Calibration Points (PCHIP + GPR)',
    'val.setPoint': 'Set Point',
    'val.batchTitle': 'Batch Image Test',
    'val.batchHint': 'Upload sensor images to test the calibration. If filenames contain temperatures (e.g. "37.5.png" or "sample-37.5.jpg"), errors will be computed automatically.',
    'val.selectImages': 'Select Images',
    'val.noImages': 'No images loaded.',
    'val.batchMAE': 'Batch MAE',
    'val.batchRMSE': 'Batch RMSE',
    'val.avgSpeed': 'Avg Speed',
    'val.actual': 'Actual',
    'val.predicted': 'Predicted',
    'val.error': 'Error',
    'val.absError': '|Error|',
    'val.file': 'File',

    // Footer
    'footer.desc': 'Photonic Gel Body-Temperature Sensor \u2014 Wireless, Power-Free, Smart Sensing Platform',
    'footer.citation': 'Reference: Hydroxypropyl cellulose (HPC) cholesteric liquid crystal photonic sensor for real-time body temperature monitoring. Developed at Northeastern University (NEU), Zhu Research Laboratory. System employs CIE chromaticity-based dominant wavelength extraction and cubic spline interpolation for wavelength-to-temperature mapping.',
    'footer.disclaimer': 'For research and demonstration purposes only. Not a substitute for professional medical advice, diagnosis, or treatment.',
    'footer.copyright': '\u00A9 2026 ZhuLab @ NEU. All rights reserved.',

    // Simple messages (3-tier)
    'simple.normal':       'Temperature is normal. {Subject} is doing well. No action needed.',
    'simple.warning':      'Temperature elevated. Rest, drink fluids, and check again in 15\u201330 minutes.',
    'simple.feverRapid':   'FEVER detected and rising fast. Contact a {doctor} soon. Seek {medical} attention.',
    'simple.feverMsg':     'FEVER detected. Please seek {medical} care promptly. Cool compresses may help.',
    'simple.pet':          'your pet',
    'simple.patient':      'the patient',
    'simple.doctor':       'doctor',
    'simple.vet':          'vet',
    'simple.vetVisit':     'a vet visit',
    'simple.doctorCall':   'calling a doctor',
    'simple.medical':      'medical',
    'simple.veterinary':   'veterinary',
    'simple.emergency':    'the hospital',
    'simple.emergencyVet': 'emergency vet',

    // Language selector
    'lang.label': 'Language',

    // Pagination
    'log.perPage': 'Per page:',
    'log.all': 'All',
    'log.page': 'Page',

    // Alarm System (3-tier)
    'alarm.title': 'TEMPERATURE ALARM',
    'alarm.acknowledge': 'Acknowledge',
    'alarm.silence': 'Silence',
    'alarm.fever': 'CRITICAL: Temperature {temp}\u00B0C indicates fever! Seek medical attention immediately.',
    'alarm.feverRapid': 'CRITICAL: Temperature {temp}\u00B0C is rising rapidly in fever range! Seek emergency care.',
    'alarm.warningConsecutive': 'WARNING: Two consecutive elevated readings at {temp}\u00B0C. Monitor closely and consider medical consultation.',

    // Health Insights
    'insights.title': 'Health Insights & Pattern Analysis',
    'insights.circadian': 'Circadian Rhythm Analysis',
    'insights.stability': 'Thermal Stability Index',
    'insights.trajectory': 'Health Trajectory',
    'insights.deviation': 'Baseline Deviation',
    'insights.needMore': 'Need at least 3 readings across different times to analyze circadian patterns.',
    'insights.morning': 'Morning',
    'insights.afternoon': 'Afternoon',
    'insights.evening': 'Evening',
    'insights.night': 'Night',
    'insights.veryStable': 'Very Stable',
    'insights.moderatelyStable': 'Moderately Stable',
    'insights.fluctuating': 'Fluctuating',
    'insights.improving': 'Improving \u2014 Temperature trending down',
    'insights.worsening': 'Worsening \u2014 Temperature trending up',
    'insights.stableTrajectory': 'Stable \u2014 Temperature holding steady',
    'insights.trajectoryWait': 'Monitoring will begin after multiple readings are collected.',
    'insights.trajectoryDetail': 'Change of {change}\u00B0C over last {count} readings.',
    'insights.deviationWait': 'Take a reading to compare against baseline.',
    'insights.withinBaseline': 'Within normal baseline range.',
    'insights.aboveBaseline': '{deg}\u00B0C above expected baseline.',
    'insights.belowBaseline': '{deg}\u00B0C below expected baseline.',
    'insights.unstable': 'Unstable',
    'insights.stable': 'Stable',

    // Trend Alerts (translated)
    'trend.rapidTitle': '[ALERT] Rapid Temperature Rise Detected',
    'trend.rapidMsg': 'Temperature increased by {rise}\u00B0C within {hours} hours. Rapid rises may indicate underlying health conditions requiring immediate attention.',
    'trend.slowTitle': '[NOTICE] Gradual Temperature Rise Detected',
    'trend.slowMsg': 'Temperature increased by {rise}\u00B0C over {hours} hours. Gradual rises are typically associated with infections such as colds or flu.',
    'trend.recoveryTitle': '[STABLE] Temperature Normalized',
    'trend.recoveryMsg': '{count} consecutive normal readings confirmed. Temperature appears to have stabilized in the normal range.',

    // AI Engine — Subject labels
    'ai.subject.humanAdult': 'Adult human',
    'ai.subject.humanElderly': 'Elderly individual (65+)',
    'ai.subject.humanInfant': 'Infant/toddler (0\u20133 years)',
    'ai.subject.humanChild': 'Child (4\u201312 years)',
    'ai.subject.animalDog': 'Canine companion',
    'ai.subject.animalCat': 'Feline companion',
    'ai.animal.dog': 'dog',
    'ai.animal.cat': 'cat',

    // AI Engine — Think phase
    'ai.thinkSubject': 'Subject',
    'ai.thinkRange': 'Normal range',
    'ai.thinkCurrent': 'Current reading',
    'ai.thinkHistory': 'Prior readings',
    'ai.thinkConditions': 'Conditions',
    'ai.cond.none': 'None reported',
    'ai.cond.immune-compromised': 'Immune-compromised',
    'ai.cond.chronic-illness': 'Chronic illness',
    'ai.cond.post-surgery': 'Post-surgery',
    'ai.cond.pregnancy': 'Pregnancy',

    // AI Engine — Analyze phase
    'ai.classification': 'Classification',
    'ai.level.unknown': 'Unknown',
    'ai.trend.rapidRise': 'ALERT: Rapid temperature escalation detected \u2014 this pattern may indicate acute infection, inflammatory response, or other urgent conditions.',
    'ai.trend.slowRise': 'Gradual temperature increase observed \u2014 consistent with common infections (cold, flu) or mild inflammatory processes.',
    'ai.trend.recovery': 'Temperature returning to normal range with consecutive stable readings.',
    'ai.trend.rising': 'Temperature is trending upward. Continued monitoring recommended.',
    'ai.trend.declining': 'Temperature is trending downward toward normal range.',
    'ai.conditionsNote': '[NOTE] Subject has {cond}; stricter monitoring thresholds apply.',

    // AI Engine — Decide phase (Human)
    'ai.rec.title': 'Health Recommendations',
    'ai.rec.condAdvice': 'Due to {cond}, consult a healthcare provider at lower thresholds than usual.',
    'ai.rec.condSevere': 'Individuals with pre-existing conditions may experience more severe complications from fever.',

    // Condition-specific recommendations (4 conditions × 3 severity levels)
    'ai.rec.cond.immune.normal': '[Immune-compromised] Even at normal temperature, maintain strict hygiene and avoid contact with sick individuals. Report any temperature change >0.3\u00B0C to your doctor.',
    'ai.rec.cond.immune.warning': '[Immune-compromised] Even mild elevation may signal a serious infection. Contact your healthcare provider if temperature stays elevated for more than 2 hours.',
    'ai.rec.cond.immune.fever': '[CRITICAL \u2014 Immune-compromised] Fever requires IMMEDIATE emergency evaluation for sepsis and bloodstream infection. Do not delay \u2014 immune-compromised patients can deteriorate rapidly.',

    'ai.rec.cond.chronic.normal': '[Chronic Illness] Continue regular medication schedule. Monitor for any temperature fluctuation that may indicate a flare-up of your underlying condition.',
    'ai.rec.cond.chronic.warning': '[Chronic Illness] Elevated temperature may interact with your current medications. Consult your doctor if temperature persists in the warning range.',
    'ai.rec.cond.chronic.fever': '[CRITICAL \u2014 Chronic Illness] Fever can trigger dangerous complications with chronic conditions (cardiac stress, respiratory decompensation). Seek emergency medical care immediately.',

    'ai.rec.cond.surgery.normal': '[Post-Surgery] Normal temperature is a positive sign of recovery. Continue monitoring for any sudden changes, especially near surgical site.',
    'ai.rec.cond.surgery.warning': '[Post-Surgery] Mild temperature elevation within 48\u201372 hours post-surgery can be normal. However, inspect the surgical site for redness, swelling, warmth, or drainage. Contact your surgeon if concerned.',
    'ai.rec.cond.surgery.fever': '[CRITICAL \u2014 Post-Surgery] Post-operative fever may indicate surgical site infection, urinary tract infection, or pneumonia. Contact your surgeon or hospital immediately.',

    'ai.rec.cond.pregnancy.normal': '[Pregnancy] Normal temperature \u2014 maintain regular prenatal care schedule. Stay well hydrated and avoid prolonged exposure to heat.',
    'ai.rec.cond.pregnancy.warning': '[Pregnancy] Elevated temperature during pregnancy should be monitored closely. Use acetaminophen only if advised by your OB/GYN. Avoid ibuprofen and aspirin. Contact your doctor if it persists >2 hours.',
    'ai.rec.cond.pregnancy.fever': '[CRITICAL \u2014 Pregnancy] Fever during pregnancy is a medical emergency. Risk of neural tube defects, preterm labor, and fetal distress. Seek emergency obstetric care IMMEDIATELY.',

    // ── Subject-type-specific condition overrides (Elderly, Infant, Child, Dog, Cat) ──
    // Immune-compromised × subject type
    'ai.rec.cond.immune.normal.elderly': '[Immune-compromised Elderly] Even at normal temperature, elderly immune-compromised patients may mask infections. Maintain strict hygiene, avoid crowds, and report ANY temperature change >0.2\u00B0C.',
    'ai.rec.cond.immune.warning.elderly': '[Immune-compromised Elderly] URGENT \u2014 Even mild elevation in elderly immune-compromised patients can signal sepsis. Contact your doctor or go to ER immediately. Do not wait.',
    'ai.rec.cond.immune.fever.elderly': '[CRITICAL \u2014 Immune-compromised Elderly] Maximum urgency. Elderly immune-compromised patients with fever are at extreme risk of sepsis and organ failure. Call emergency services NOW.',
    'ai.rec.cond.immune.normal.infant': '[Immune-compromised Infant] Maintain a sterile environment. Limit visitors. Even normal temperature requires vigilant monitoring every 1\u20132 hours.',
    'ai.rec.cond.immune.warning.infant': '[CRITICAL \u2014 Immune-compromised Infant] ANY elevation in an immune-compromised infant is a medical emergency. Go to the pediatric ER immediately.',
    'ai.rec.cond.immune.fever.infant': '[EMERGENCY \u2014 Immune-compromised Infant] Call 911/emergency services immediately. Immune-compromised infants with fever can deteriorate within minutes.',
    'ai.rec.cond.immune.normal.child': '[Immune-compromised Child] Ensure strict hand hygiene and avoid contact with sick classmates. Monitor temperature every 2\u20133 hours. Report any change to your pediatric oncologist.',
    'ai.rec.cond.immune.warning.child': '[Immune-compromised Child] Contact your pediatric specialist immediately. Even mild elevation in immune-compromised children can indicate neutropenic fever \u2014 do not wait.',
    'ai.rec.cond.immune.fever.child': '[CRITICAL \u2014 Immune-compromised Child] Go to the pediatric ER immediately. Neutropenic fever in children requires IV antibiotics within 1 hour.',
    'ai.rec.cond.immune.warning.dog': '[Immune-compromised Dog] Your dog\u0027s mild elevation requires veterinary attention. Immune-compromised dogs are vulnerable to opportunistic infections. Contact your vet today.',
    'ai.rec.cond.immune.fever.dog': '[CRITICAL \u2014 Immune-compromised Dog] Fever in an immune-compromised dog is a veterinary emergency. Seek immediate veterinary care.',
    'ai.rec.cond.immune.warning.cat': '[Immune-compromised Cat] Cats hide illness well. Even mild elevation in an immune-compromised cat may indicate serious infection. Contact your vet promptly.',
    'ai.rec.cond.immune.fever.cat': '[CRITICAL \u2014 Immune-compromised Cat] Fever in an immune-compromised cat is a veterinary emergency. Seek immediate veterinary care.',

    // Chronic illness × subject type
    'ai.rec.cond.chronic.normal.elderly': '[Chronic Illness \u2014 Elderly] Continue regular medication schedule. For elderly patients with chronic conditions, even normal temperature fluctuations should be logged for your doctor.',
    'ai.rec.cond.chronic.warning.elderly': '[Chronic Illness \u2014 Elderly] Elevated temperature increases cardiac stress and metabolic demand. Risk of decompensation is high. Contact your doctor immediately.',
    'ai.rec.cond.chronic.fever.elderly': '[CRITICAL \u2014 Chronic Illness Elderly] Fever with chronic illness in elderly patients carries high risk of heart failure, respiratory failure, and organ stress. Seek emergency care NOW.',
    'ai.rec.cond.chronic.normal.infant': '[Chronic Illness \u2014 Infant] Continue prescribed treatment plan. Monitor temperature closely as chronic conditions may affect thermoregulation.',
    'ai.rec.cond.chronic.warning.infant': '[Chronic Illness \u2014 Infant] Contact your pediatric specialist. Elevated temperature in an infant with chronic illness may require medication adjustment.',
    'ai.rec.cond.chronic.fever.infant': '[CRITICAL \u2014 Chronic Illness Infant] Go to the pediatric ER immediately. Fever in an infant with chronic conditions requires urgent evaluation.',
    'ai.rec.cond.chronic.normal.child': '[Chronic Illness \u2014 Child] Continue regular medication and monitoring routine. Log all temperature readings for your next doctor visit.',
    'ai.rec.cond.chronic.warning.child': '[Chronic Illness \u2014 Child] Elevated temperature may affect medication efficacy or indicate a flare-up. Contact your pediatrician for guidance on medication adjustment.',
    'ai.rec.cond.chronic.fever.child': '[CRITICAL \u2014 Chronic Illness Child] Fever may trigger complications with your child\u0027s chronic condition. Seek medical care promptly.',
    'ai.rec.cond.chronic.warning.dog': '[Chronic Illness \u2014 Dog] Your dog\u0027s chronic condition may be affected by elevated temperature. Monitor closely and contact your vet if it persists.',
    'ai.rec.cond.chronic.fever.dog': '[CRITICAL \u2014 Chronic Illness Dog] Fever in a dog with chronic illness may indicate a flare-up or secondary infection. Seek veterinary care immediately.',
    'ai.rec.cond.chronic.warning.cat': '[Chronic Illness \u2014 Cat] Cats with chronic conditions are particularly vulnerable. Contact your vet as mild elevation may indicate a worsening condition.',
    'ai.rec.cond.chronic.fever.cat': '[CRITICAL \u2014 Chronic Illness Cat] Fever in a cat with chronic illness requires immediate veterinary attention.',

    // Post-surgery × subject type
    'ai.rec.cond.surgery.normal.elderly': '[Post-Surgery \u2014 Elderly] Normal temperature is encouraging for recovery. Continue wound monitoring. Elderly patients heal slower \u2014 maintain nutrition and gentle mobility.',
    'ai.rec.cond.surgery.warning.elderly': '[Post-Surgery \u2014 Elderly] Elderly post-surgical patients have higher infection risk. Even mild elevation warrants checking the surgical site and contacting your surgeon.',
    'ai.rec.cond.surgery.fever.elderly': '[CRITICAL \u2014 Post-Surgery Elderly] Post-operative fever in elderly patients may indicate wound infection, pneumonia, UTI, or DVT. Contact your surgical team immediately.',
    'ai.rec.cond.surgery.normal.infant': '[Post-Surgery \u2014 Infant] Normal temperature post-surgery is a good sign. Continue monitoring feeding patterns, activity, and wound site every 2\u20134 hours.',
    'ai.rec.cond.surgery.warning.infant': '[Post-Surgery \u2014 Infant] Contact your pediatric surgeon. Post-operative elevation in infants needs prompt evaluation to rule out infection.',
    'ai.rec.cond.surgery.fever.infant': '[CRITICAL \u2014 Post-Surgery Infant] Post-operative fever in an infant requires immediate pediatric emergency evaluation.',
    'ai.rec.cond.surgery.normal.child': '[Post-Surgery \u2014 Child] Recovery is progressing well. Encourage rest, fluids, and monitor the surgical site for any changes.',
    'ai.rec.cond.surgery.warning.child': '[Post-Surgery \u2014 Child] Check the surgical site for redness or swelling. Contact your surgeon if the child has pain or temperature persists.',
    'ai.rec.cond.surgery.fever.child': '[CRITICAL \u2014 Post-Surgery Child] Contact your surgeon or go to the ER. Post-operative fever in children may indicate surgical site infection.',
    'ai.rec.cond.surgery.warning.dog': '[Post-Surgery \u2014 Dog] Check the surgical site for swelling, redness, or discharge. Prevent licking (use e-collar). Contact your vet if elevation persists.',
    'ai.rec.cond.surgery.fever.dog': '[CRITICAL \u2014 Post-Surgery Dog] Post-operative fever may indicate wound infection. Contact your veterinarian immediately.',
    'ai.rec.cond.surgery.warning.cat': '[Post-Surgery \u2014 Cat] Inspect the incision site. Ensure your cat is not excessively licking the wound. Contact your vet if temperature remains elevated.',
    'ai.rec.cond.surgery.fever.cat': '[CRITICAL \u2014 Post-Surgery Cat] Post-operative fever in a cat may indicate surgical site infection or abscess. Seek veterinary care immediately.',

    // Pregnancy (only applicable to human females, but included for completeness)
    'ai.rec.cond.pregnancy.normal.elderly': '[Pregnancy \u2014 Advanced Maternal Age] Normal temperature. Continue close prenatal monitoring as recommended for advanced maternal age pregnancies.',
    'ai.rec.cond.pregnancy.warning.elderly': '[Pregnancy \u2014 Advanced Maternal Age] Elevated temperature in advanced maternal age requires immediate OB/GYN consultation. Higher risk of complications.',
    'ai.rec.cond.pregnancy.fever.elderly': '[CRITICAL \u2014 Pregnancy Advanced Age] Fever during pregnancy at advanced maternal age is a medical emergency. Seek emergency obstetric care immediately.',

    'ai.rec.urgentRapid': 'URGENT \u2014 Rapid Temperature Rise',
    'ai.rec.criticalRapidHuman': '[CRITICAL] Rapid temperature elevation detected. This pattern can indicate serious conditions including bacterial infection, drug reaction, or heat stroke.',
    'ai.rec.criticalRapidAnimal': '[CRITICAL] Rapid temperature elevation detected in your pet. This may indicate serious infection or heat stroke.',

    // Human recommendations by level (3-tier: Normal / Warning / Fever)
    'ai.rec.h.normalTitle': 'Normal Temperature',
    'ai.rec.h.normal1': 'Temperature ({t}\u00B0C) is within the normal physiological range.',
    'ai.rec.h.normal2': 'No immediate action required.',
    'ai.rec.h.normal3': 'Continue routine monitoring as scheduled.',

    'ai.rec.h.warningTitle': 'Elevated Temperature Warning',
    'ai.rec.h.warn1': 'Temperature ({t}\u00B0C) is in the warning range (37\u201338\u00B0C).',
    'ai.rec.h.warn2': 'Stay well hydrated and rest.',
    'ai.rec.h.warn3': 'Monitor temperature every 30 minutes to 1 hour.',
    'ai.rec.h.warn4.adult': 'Consider light clothing and a comfortable room temperature.',
    'ai.rec.h.warn4.elderly': 'For elderly: Even mild elevations can be significant. Ensure hydration and consider a medical consultation.',
    'ai.rec.h.warn4.infant': 'For infants: Dress in light clothing. Ensure adequate fluid intake. Contact pediatrician if temperature persists.',
    'ai.rec.h.warn4.child': 'For children: Encourage fluid intake and light clothing. Monitor activity level and appetite.',

    'ai.rec.h.feverTitle': 'Fever Detected \u2014 Medical Attention Advised',
    'ai.rec.h.fever1': 'Temperature ({t}\u00B0C) indicates fever (above 38\u00B0C).',
    'ai.rec.h.fever2': 'Rest is essential. Avoid strenuous activity.',
    'ai.rec.h.fever3': 'Increase fluid intake (water, electrolyte solutions, clear broths).',
    'ai.rec.h.fever4': 'Consider over-the-counter fever reducers (acetaminophen or ibuprofen) if appropriate.',
    'ai.rec.h.fever5.adult': 'If fever persists for more than 24\u201348 hours, seek medical attention.',
    'ai.rec.h.fever5.elderly': '[URGENT] For elderly: Seek prompt medical evaluation. Fever in elderly individuals may indicate a serious condition.',
    'ai.rec.h.fever5.infant': '[URGENT] For infants under 3 months: Contact your pediatrician immediately for any fever.',
    'ai.rec.h.fever5.child': '[URGENT] For children: Use age-appropriate fever medication. Monitor for signs of dehydration.',
    'ai.rec.h.fever6': 'Monitor for additional symptoms: chills, headache, body aches, cough. Seek emergency care if temperature exceeds 40\u00B0C.',

    // Animal recommendations by level (3-tier: Normal / Warning / Fever)
    'ai.rec.a.petTitle': 'Pet Health Assessment \u2014 {animal}',

    'ai.rec.a.normalTitle': '{animal} \u2014 Normal Temperature',
    'ai.rec.a.normal1': 'Your {animal}\'s temperature ({t}\u00B0C) is within the normal range.',
    'ai.rec.a.normal2': 'No immediate concern. Continue regular monitoring.',
    'ai.rec.a.normal3': 'Monitor appetite, activity level, and behavior as usual.',

    'ai.rec.a.warningTitle': '{animal} \u2014 Elevated Temperature',
    'ai.rec.a.warn1': 'Your {animal}\'s temperature ({t}\u00B0C) is slightly above normal.',
    'ai.rec.a.warn2': 'Ensure fresh water is always available.',
    'ai.rec.a.warn3': 'Monitor your {animal}\'s appetite, energy level, and behavior.',
    'ai.rec.a.warn4': 'A mild elevation can occur after exercise or excitement. Re-check in 1\u20132 hours.',

    'ai.rec.a.feverTitle': '{animal} \u2014 Fever Detected',
    'ai.rec.a.fever1': 'Your {animal}\'s temperature ({t}\u00B0C) indicates fever.',
    'ai.rec.a.fever2': 'Contact your veterinarian for guidance.',
    'ai.rec.a.fever3': 'Ensure access to fresh water and a cool, comfortable resting area.',
    'ai.rec.a.fever4': 'Do NOT give human fever medication to pets \u2014 many are toxic to animals.',
    'ai.rec.a.fever5': 'Keep your {animal} calm and limit physical activity.',

    // Action buttons (translated)
    'ai.act.seekImmediate': 'Seek Immediate Medical Attention',
    'ai.act.callEmergency40': 'Call Emergency Services if T > 40\u00B0C',
    'ai.act.emergencyVet': 'Seek Emergency Veterinary Care',
    'ai.act.beginCooling': 'Begin Cooling Measures',
    'ai.act.remeasure15': 'Re-measure in 15 min',
    'ai.act.warmEnv': 'Warm Environment',
    'ai.act.continueMonitor': 'Normal \u2014 Continue Monitoring',
    'ai.act.hydrate': 'Stay Hydrated',
    'ai.act.remeasure1h': 'Re-measure in 1 Hour',
    'ai.act.rest': 'Rest',
    'ai.act.feverReducer': 'Consider Fever Reducers',
    'ai.act.scheduleDoc': 'Schedule Doctor Visit',
    'ai.act.increaseFluids': 'Increase Fluids',
    'ai.act.seekMedical': 'Seek Medical Care',
    'ai.act.adminFeverRed': 'Administer Fever Reducer',
    'ai.act.coolCompress': 'Cool Compresses',
    'ai.act.callEmergency': 'Call Emergency Services',
    'ai.act.beginCoolingNow': 'Begin Cooling Now',
    'ai.act.goER': 'Go to Emergency Room',
    'ai.act.callVet': 'Call Veterinarian',
    'ai.act.ensureWater': 'Ensure Water Access',
    'ai.act.recheck1h': 'Re-check in 1 Hour',
    'ai.act.contactVet': 'Contact Veterinarian',
    'ai.act.freshWaterCool': 'Fresh Water & Cool Area',
    'ai.act.immediateVet': 'Immediate Vet Visit',
    'ai.act.coolPaws': 'Cool Paw Pads & Ears',
    'ai.act.emergencyVetNow': 'Emergency Vet NOW',

    // Misc
    'confirm.clearHistory': 'Clear all temperature history?',
    'confirm.resetCal': 'Reset calibration to default values?',
    'tts.unsupported': 'Text-to-speech is not supported in this browser.',
    'speech.tempIs': 'Temperature is {temp}. Status: {status}. {message}',
    'alert.cameraError': 'Camera access denied or not available.',
    'alert.selectImage': 'Please select an image file.',
    'alert.captureFirst': 'Please capture or upload an image first.',
    'alert.colorError': 'Could not extract color from the selected region.',
    'alert.tempError': 'Could not map wavelength to temperature. Check calibration data.',
    'alert.calImported': 'Imported {count} calibration points.',
    'alert.calImportFail': 'Could not parse calibration points. Expected CSV: wavelength,temperature',
    'alert.noExportData': 'No data to export.',

    // LLM Engine
    'llm.title': 'AI Engine Settings',
    'llm.desc': 'Connect a free cloud AI (Groq + Llama 3) for personalized health recommendations. Rule-based fallback is always available.',
    'llm.enable': 'Enable AI Enhancement',
    'llm.apiUrl': 'API Endpoint URL',
    'llm.testBtn': 'Test Connection',
    'llm.info': 'Free setup: Sign up at groq.com (API key) and pythonanywhere.com (host). See flask_api/ folder for server code.',
    'llm.enhanced': 'AI Enhanced',
    'llm.source': 'AI Model',
    'llm.aiEnhanced': 'AI-Enhanced Recommendation',
    'llm.loading': 'Consulting AI model...',
    'llm.status.off': 'AI Enhancement is OFF',
    'llm.status.noUrl': 'No API URL configured',
    'llm.status.ready': 'AI Enhancement is ready',
    'llm.test.noUrl': 'Please enter the API URL first.',
    'llm.test.testing': 'Testing connection...',
    'llm.test.success': 'Connected successfully!',
    'llm.test.fail': 'Connection failed',
},

// ---- CHINESE (Simplified) ----
zh: {

    'app.title': '光子凝胶健康监测仪',
    'app.subtitle': '无线免电源智能体温感应平台',
    'header.accuracy': '精度',
    'header.speed': '速度',
    'mode.simple': '简单',
    'mode.advanced': '高级',
    'status.waiting': '等待测量...',
    'status.temp.default': '--.-\u00B0C',
    'status.message.default': '拍摄传感器照片以检测体温',
    'status.readAloud': '朗读结果',
    'status.lastChecked': '上次检测：',
    'face.waiting': '等待中...',
    'face.happy': '一切正常',
    'face.neutral': '警告',
    'face.crying': '发烧',
    'step.1': '拍照',
    'step.2': '查看结果',
    'step.3': '遵循建议',
    'urgent.readAloud': '朗读',
    'urgent.fever': '发烧：{temp}\u00B0C \u2014 请就医',
    'urgent.rapidRise': '体温急速上升，请勿忽视。',
    'urgent.actNow': '请按照以下建议采取行动。',
    'profile.title': '受检对象',
    'profile.subjectType': '对象类型',
    'profile.humanAdult': '人类 \u2014 成人',
    'profile.humanElderly': '人类 \u2014 老年人 (\u226565岁)',
    'profile.humanInfant': '人类 \u2014 婴幼儿 (0\u20133岁)',
    'profile.humanChild': '人类 \u2014 儿童 (4\u201312岁)',
    'profile.animalDog': '动物 \u2014 犬',
    'profile.animalCat': '动物 \u2014 猫',
    'profile.name': '姓名/编号（可选）',
    'profile.namePlaceholder': '例如：患者A、小狗',
    'profile.baseline': '基准体温 (\u00B0C)',
    'profile.baselinePlaceholder': '按类型自动设置',
    'profile.conditions': '已知状况',
    'profile.condNone': '无',
    'profile.condImmune': '免疫功能低下',
    'profile.condChronic': '慢性疾病',
    'profile.condSurgery': '术后',
    'profile.condPregnancy': '怀孕',
    'capture.title': '图像采集',
    'capture.camera': '摄像头',
    'capture.upload': '上传',
    'capture.startCamera': '启动摄像头',
    'capture.captureAnalyze': '拍摄并分析',
    'capture.stopCamera': '停止摄像头',
    'capture.cameraPrompt': '点击"启动摄像头"开始',
    'capture.dragDrop': '拖放图像到此处或点击浏览',
    'capture.supports': '支持：JPG, PNG, BMP, WebP',
    'capture.selectRegion': '选择传感器区域（点击拖拽）',
    'capture.analyzeColor': '分析颜色',
    'capture.resetSelection': '重置选择',
    'capture.clearImage': '清除图像',
    'results.title': '分析结果',
    'results.detectedColor': '检测到的颜色',
    'results.wavelength': '主波长',
    'results.bodyTemp': '体温',
    'results.riskLevel': '风险等级',
    'risk.normal': '正常',
    'risk.warning': '警告',
    'risk.fever': '发烧',
    'chart.title': '体温历史',
    'chart.clear': '清除',
    'chart.empty': '尚无体温记录。',
    'chart.emptyHint': '拍摄并分析图像以开始监测。',
    'prediction.title': '体温预测 (RNN)',
    'prediction.runPrediction': '运行预测',
    'prediction.minReadings': '需要至少3次体温读数才能进行预测。当前读数：',
    'prediction.feverOnset': '预测发烧时间',
    'prediction.modelPerf': '模型表现',
    'ai.title': 'AI 健康评估',
    'ai.think': '思考',
    'ai.analyze': '分析',
    'ai.decide': '决定',
    'ai.recommendations': '建议',
    'log.title': '测量日志',
    'log.export': '导出CSV',
    'log.colNum': '#',
    'log.colTime': '时间',
    'log.colPatient': '患者',
    'log.colCondition': '健康状况',
    'log.colColor': '颜色',
    'log.colWavelength': '波长',
    'log.colTemp': '体温 (\u00B0C)',
    'log.colChange': '变化',
    'log.colRisk': '风险',
    'log.colTrend': '趋势',
    'log.colSpeed': '速度',
    'log.empty': '尚无测量记录。',
    'prob.title': '健康风险概率',
    'prob.fever': '发烧概率',
    'prob.infection': '感染风险概率',
    'prob.heatStress': '热应激概率',
    'val.title': '验证与误差分析',
    'val.maxError': '最大误差',
    'val.testSamples': '测试样本',
    'val.rawTitle': '原始数据测试 \u2014 21个校准点（PCHIP + GPR）',
    'val.setPoint': '设定温度',
    'val.selectImages': '选择图像',
    'val.noImages': '未加载图像。',
    'footer.desc': '光子凝胶体温传感器 \u2014 无线免电源智能感应平台',
    'footer.disclaimer': '仅用于研究和演示目的。不能替代专业医疗建议、诊断或治疗。',
    'footer.copyright': '\u00A9 2026 ZhuLab @ NEU. 版权所有。',
    'simple.normal': '体温正常。{Subject}状态良好，无需处理。',
    'simple.warning': '体温偏高。请休息、多喝水，15\u201330分钟后再检测。',
    'simple.feverRapid': '检测到发烧且体温快速上升。请尽快联系{doctor}。寻求{medical}帮助。',
    'simple.feverMsg': '检测到发烧。请立即寻求{medical}帮助。冷敷可能有帮助。',
    'simple.pet': '您的宠物',
    'simple.patient': '患者',
    'simple.doctor': '医生',
    'simple.vet': '兽医',
    'simple.vetVisit': '带去看兽医',
    'simple.doctorCall': '联系医生',
    'simple.medical': '医疗',
    'simple.veterinary': '兽医',
    'simple.emergency': '医院',
    'simple.emergencyVet': '宠物急诊',
    'lang.label': '语言',
    'confirm.clearHistory': '清除所有体温历史？',
    'confirm.resetCal': '恢复默认校准值？',
    'tts.unsupported': '此浏览器不支持语音播放。',
    'speech.tempIs': '体温为{temp}。状态：{status}。{message}',
    'alert.cameraError': '摄像头访问被拒绝或不可用。',
    'alert.selectImage': '请选择一张图片文件。',
    'alert.captureFirst': '请先拍摄或上传一张图片。',
    'alert.colorError': '无法从所选区域提取颜色。',
    'alert.tempError': '无法将波长映射为温度。请检查校准数据。',
    'alert.calImported': '已导入{count}个校准点。',
    'alert.calImportFail': '无法解析校准点。需要CSV格式：波长,温度',
    'alert.noExportData': '没有可导出的数据。',

    // Pagination
    'log.perPage': '每页：',
    'log.all': '全部',
    'log.page': '第',

    // Alarm (3-tier)
    'alarm.title': '体温警报',
    'alarm.acknowledge': '确认',
    'alarm.silence': '静音',
    'alarm.fever': '危急：体温 {temp}\u00B0C 表明发烧！请立即就医。',
    'alarm.feverRapid': '危急：体温 {temp}\u00B0C 在发烧范围内快速上升！请寻求急救。',
    'alarm.warningConsecutive': '警告：连续两次升高读数 {temp}\u00B0C。请密切监测并考虑就医。',

    // Health Insights
    'insights.title': '健康洞察与模式分析',
    'insights.circadian': '昼夜节律分析',
    'insights.stability': '体温稳定性指数',
    'insights.trajectory': '健康趋势',
    'insights.deviation': '基准偏差',
    'insights.needMore': '需要至少3次不同时间的测量才能分析昼夜节律。',
    'insights.morning': '上午',
    'insights.afternoon': '下午',
    'insights.evening': '晚上',
    'insights.night': '夜间',
    'insights.veryStable': '非常稳定',
    'insights.moderatelyStable': '较为稳定',
    'insights.fluctuating': '波动中',
    'insights.improving': '改善中 \u2014 体温下降趋势',
    'insights.worsening': '恶化中 \u2014 体温上升趋势',
    'insights.stableTrajectory': '稳定 \u2014 体温保持平稳',
    'insights.trajectoryWait': '收集多次测量后将开始监测。',
    'insights.trajectoryDetail': '最近{count}次测量变化{change}\u00B0C。',
    'insights.deviationWait': '进行测量以与基准比较。',
    'insights.withinBaseline': '在正常基准范围内。',
    'insights.aboveBaseline': '高于预期基准{deg}\u00B0C。',
    'insights.belowBaseline': '低于预期基准{deg}\u00B0C。',
    'insights.unstable': '不稳定',
    'insights.stable': '稳定',

    // Trend alerts
    'trend.rapidTitle': '[警报] 检测到体温快速上升',
    'trend.rapidMsg': '体温在{hours}小时内上升了{rise}\u00B0C。快速上升可能预示需要立即关注的健康状况。',
    'trend.slowTitle': '[提示] 检测到体温缓慢上升',
    'trend.slowMsg': '体温在{hours}小时内上升了{rise}\u00B0C。缓慢上升通常与感冒或流感等感染有关。',
    'trend.recoveryTitle': '[稳定] 体温已恢复正常',
    'trend.recoveryMsg': '已确认{count}次连续正常读数。体温已稳定在正常范围内。',

    // AI Engine
    'ai.subject.humanAdult': '成年人',
    'ai.subject.humanElderly': '老年人 (65+)',
    'ai.subject.humanInfant': '婴幼儿 (0\u20133岁)',
    'ai.subject.humanChild': '儿童 (4\u201312岁)',
    'ai.subject.animalDog': '犬类伴侣',
    'ai.subject.animalCat': '猫类伴侣',
    'ai.animal.dog': '狗',
    'ai.animal.cat': '猫',
    'ai.thinkSubject': '对象',
    'ai.thinkRange': '正常范围',
    'ai.thinkCurrent': '当前读数',
    'ai.thinkHistory': '历史读数',
    'ai.thinkConditions': '已知状况',
    'ai.cond.none': '未报告',
    'ai.cond.immune-compromised': '免疫功能低下',
    'ai.cond.chronic-illness': '慢性疾病',
    'ai.cond.post-surgery': '术后',
    'ai.cond.pregnancy': '怀孕',
    'ai.classification': '分类',
    'ai.level.unknown': '未知',
    'ai.trend.rapidRise': '警报：检测到体温快速升高 \u2014 此模式可能表示急性感染、炎症反应或其他紧急情况。',
    'ai.trend.slowRise': '观察到体温缓慢上升 \u2014 与普通感染（感冒、流感）或轻度炎症一致。',
    'ai.trend.recovery': '体温正在恢复正常范围，连续稳定读数确认。',
    'ai.trend.rising': '体温呈上升趋势。建议继续监测。',
    'ai.trend.declining': '体温呈下降趋势，趋向正常范围。',
    'ai.conditionsNote': '[注意] 对象有{cond}；应采用更严格的监测标准。',
    'ai.rec.title': '健康建议',
    'ai.rec.condAdvice': '由于{cond}，建议在较低阈值时即咨询医疗人员。',
    'ai.rec.condSevere': '有基础疾病的人可能因发烧而出现更严重的并发症。',

    // 状况特定建议（4种状况 × 3个严重级别）
    'ai.rec.cond.immune.normal': '[免疫功能低下] 即使体温正常，也应保持严格卫生，避免接触患病人员。如体温变化超过0.3\u00B0C，请及时告知医生。',
    'ai.rec.cond.immune.warning': '[免疫功能低下] 即使轻微升高也可能预示严重感染。如体温持续升高超过2小时，请联系您的医疗团队。',
    'ai.rec.cond.immune.fever': '[危急 \u2014 免疫功能低下] 发烧需要立即急诊评估，排查脓毒症和血流感染。切勿延误\u2014\u2014免疫功能低下患者病情可能迅速恶化。',

    'ai.rec.cond.chronic.normal': '[慢性疾病] 继续按时服药。注意体温波动，这可能提示基础疾病的发作。',
    'ai.rec.cond.chronic.warning': '[慢性疾病] 体温升高可能与您当前的药物产生相互作用。如体温持续处于警告范围，请咨询医生。',
    'ai.rec.cond.chronic.fever': '[危急 \u2014 慢性疾病] 发烧可能引发慢性疾病的危险并发症（心脏负荷、呼吸功能失代偿）。请立即寻求急救医疗。',

    'ai.rec.cond.surgery.normal': '[术后] 体温正常是恢复良好的积极信号。继续监测是否有突然变化，特别是手术部位附近。',
    'ai.rec.cond.surgery.warning': '[术后] 术后48-72小时内轻度体温升高可能是正常的。但请检查手术部位是否有红肿、发热或引流液。如有疑虑请联系外科医生。',
    'ai.rec.cond.surgery.fever': '[危急 \u2014 术后] 术后发烧可能表示手术部位感染、尿路感染或肺炎。请立即联系外科医生或医院。',

    'ai.rec.cond.pregnancy.normal': '[怀孕] 体温正常\u2014\u2014继续常规产前检查。保持充足水分摄入，避免长时间暴露在高温环境中。',
    'ai.rec.cond.pregnancy.warning': '[怀孕] 孕期体温升高应密切监测。仅在产科医生建议下使用对乙酰氨基酚。避免使用布洛芬和阿司匹林。如持续>2小时请联系医生。',
    'ai.rec.cond.pregnancy.fever': '[危急 \u2014 怀孕] 孕期发烧是医疗紧急情况。存在神经管缺陷、早产和胎儿窘迫风险。请立即寻求产科急救护理。',

    // ── 针对不同年龄/种类的特定健康状况建议 ──
    // 免疫功能低下 × 受试者类型
    'ai.rec.cond.immune.normal.elderly': '[免疫功能低下 老年人] 即使体温正常，老年免疫功能低下患者也可能隐藏感染。保持严格卫生，避免人群聚集，任何体温变化>0.2\u00B0C请立即报告。',
    'ai.rec.cond.immune.warning.elderly': '[免疫功能低下 老年人] 紧急\u2014\u2014老年免疫功能低下患者即使轻微升高也可能预示脓毒症。请立即联系医生或前往急诊。不要等待。',
    'ai.rec.cond.immune.fever.elderly': '[危急 \u2014 免疫功能低下老年人] 最高紧急级别。老年免疫功能低下患者发烧面临极高的脓毒症和器官衰竭风险。请立即拨打急救电话。',
    'ai.rec.cond.immune.normal.infant': '[免疫功能低下 婴儿] 保持无菌环境。限制探访者。即使体温正常也需要每1\u20132小时密切监测。',
    'ai.rec.cond.immune.warning.infant': '[危急 \u2014 免疫功能低下婴儿] 免疫功能低下婴儿的任何体温升高都是医疗紧急情况。请立即前往儿科急诊。',
    'ai.rec.cond.immune.fever.infant': '[紧急 \u2014 免疫功能低下婴儿] 请立即拨打急救电话！免疫功能低下的婴儿发烧可能在几分钟内恶化。',
    'ai.rec.cond.immune.normal.child': '[免疫功能低下 儿童] 确保严格手部卫生，避免与生病的同学接触。每2\u20133小时监测体温。任何变化请告知您的儿科专科医生。',
    'ai.rec.cond.immune.warning.child': '[免疫功能低下 儿童] 请立即联系儿科专科医生。免疫功能低下儿童即使轻微升高也可能是粒细胞减少性发热\u2014\u2014不要等待。',
    'ai.rec.cond.immune.fever.child': '[危急 \u2014 免疫功能低下儿童] 请立即前往儿科急诊。粒细胞减少性发热需要在1小时内给予静脉抗生素。',
    'ai.rec.cond.immune.warning.dog': '[免疫功能低下 狗] 您的狗轻微升温需要兽医关注。免疫功能低下的狗容易受到机会性感染。请今天联系兽医。',
    'ai.rec.cond.immune.fever.dog': '[危急 \u2014 免疫功能低下狗] 免疫功能低下的狗发烧是兽医紧急情况。请立即寻求兽医护理。',
    'ai.rec.cond.immune.warning.cat': '[免疫功能低下 猫] 猫善于隐藏疾病。即使免疫功能低下的猫轻微升温也可能表示严重感染。请立即联系兽医。',
    'ai.rec.cond.immune.fever.cat': '[危急 \u2014 免疫功能低下猫] 免疫功能低下的猫发烧是兽医紧急情况。请立即寻求兽医护理。',

    // 慢性疾病 × 受试者类型
    'ai.rec.cond.chronic.normal.elderly': '[慢性疾病 老年人] 继续按时服药。老年慢性病患者即使正常体温波动也应记录下来供医生参考。',
    'ai.rec.cond.chronic.warning.elderly': '[慢性疾病 老年人] 体温升高增加心脏负荷和代谢需求。老年人出现代偿失调的风险很高。请立即联系医生。',
    'ai.rec.cond.chronic.fever.elderly': '[危急 \u2014 慢性疾病老年人] 老年慢性病患者发烧面临心力衰竭、呼吸衰竭和器官负荷过高风险。请立即寻求急救护理。',
    'ai.rec.cond.chronic.normal.infant': '[慢性疾病 婴儿] 继续按医嘱治疗。密切监测体温，因为慢性疾病可能影响体温调节。',
    'ai.rec.cond.chronic.warning.infant': '[慢性疾病 婴儿] 请联系儿科专科医生。患有慢性疾病的婴儿体温升高可能需要调整药物。',
    'ai.rec.cond.chronic.fever.infant': '[危急 \u2014 慢性疾病婴儿] 请立即前往儿科急诊。患有慢性疾病的婴儿发烧需要紧急评估。',
    'ai.rec.cond.chronic.normal.child': '[慢性疾病 儿童] 继续常规药物和监测。将所有体温记录带到下次就诊时。',
    'ai.rec.cond.chronic.warning.child': '[慢性疾病 儿童] 体温升高可能影响药物效果或表示疾病发作。请联系儿科医生指导调整药物。',
    'ai.rec.cond.chronic.fever.child': '[危急 \u2014 慢性疾病儿童] 发烧可能引发孩子慢性疾病的并发症。请尽快就医。',
    'ai.rec.cond.chronic.warning.dog': '[慢性疾病 狗] 您的狗的慢性疾病可能受到体温升高的影响。密切监测，如持续请联系兽医。',
    'ai.rec.cond.chronic.fever.dog': '[危急 \u2014 慢性疾病狗] 患有慢性疾病的狗发烧可能表示疾病发作或继发感染。请立即寻求兽医护理。',
    'ai.rec.cond.chronic.warning.cat': '[慢性疾病 猫] 患有慢性疾病的猫特别脆弱。轻微升温可能表示病情恶化。请立即联系兽医。',
    'ai.rec.cond.chronic.fever.cat': '[危急 \u2014 慢性疾病猫] 患有慢性疾病的猫发烧需要立即兽医关注。',

    // 术后 × 受试者类型
    'ai.rec.cond.surgery.normal.elderly': '[术后 老年人] 体温正常有利于恢复。继续监测伤口。老年患者恢复较慢\u2014\u2014保持营养和适度活动。',
    'ai.rec.cond.surgery.warning.elderly': '[术后 老年人] 老年术后患者感染风险更高。即使轻微升高也应检查手术部位并联系外科医生。',
    'ai.rec.cond.surgery.fever.elderly': '[危急 \u2014 术后老年人] 老年术后发烧可能表示伤口感染、肺炎、尿路感染或深静脉血栓。请立即联系手术团队。',
    'ai.rec.cond.surgery.normal.infant': '[术后 婴儿] 术后体温正常是好兆头。每2\u20134小时监测喂养、活动和伤口情况。',
    'ai.rec.cond.surgery.warning.infant': '[术后 婴儿] 请联系儿科外科医生。婴儿术后体温升高需要及时评估以排除感染。',
    'ai.rec.cond.surgery.fever.infant': '[危急 \u2014 术后婴儿] 婴儿术后发烧需要立即儿科急诊评估。',
    'ai.rec.cond.surgery.normal.child': '[术后 儿童] 恢复进展良好。鼓励休息、多喝水，监测手术部位有无变化。',
    'ai.rec.cond.surgery.warning.child': '[术后 儿童] 检查手术部位是否有红肿。如孩子疼痛或体温持续偏高，请联系外科医生。',
    'ai.rec.cond.surgery.fever.child': '[危急 \u2014 术后儿童] 请联系外科医生或前往急诊。儿童术后发烧可能表示手术部位感染。',
    'ai.rec.cond.surgery.warning.dog': '[术后 狗] 检查手术部位是否肿胀、发红或有分泌物。使用伊丽莎白圈防止舔舐。如体温持续请联系兽医。',
    'ai.rec.cond.surgery.fever.dog': '[危急 \u2014 术后狗] 术后发烧可能表示伤口感染。请立即联系兽医。',
    'ai.rec.cond.surgery.warning.cat': '[术后 猫] 检查切口部位。确保猫没有过度舔伤口。如体温持续偏高，请联系兽医。',
    'ai.rec.cond.surgery.fever.cat': '[危急 \u2014 术后猫] 猫术后发烧可能表示手术部位感染或脓肿。请立即寻求兽医护理。',

    // 怀孕 × 受试者类型（仅适用于成年女性）
    'ai.rec.cond.pregnancy.normal.elderly': '[怀孕 高龄产妇] 体温正常。继续按高龄产妇建议进行密切产前监测。',
    'ai.rec.cond.pregnancy.warning.elderly': '[怀孕 高龄产妇] 高龄产妇体温升高需要立即产科会诊。并发症风险更高。',
    'ai.rec.cond.pregnancy.fever.elderly': '[危急 \u2014 怀孕高龄产妇] 高龄孕妇发烧是医疗紧急情况。请立即寻求产科急救护理。',
    'ai.rec.urgentRapid': '紧急 \u2014 体温快速升高',
    'ai.rec.criticalRapidHuman': '[危急] 检测到体温快速升高。此模式可能表示严重感染、药物反应或中暑。',
    'ai.rec.criticalRapidAnimal': '[危急] 检测到宠物体温快速升高。可能表示严重感染或中暑。',
    // 人类建议（3级：正常/警告/发烧）
    'ai.rec.h.normalTitle': '体温正常',
    'ai.rec.h.normal1': '体温（{t}\u00B0C）在正常生理范围内。',
    'ai.rec.h.normal2': '无需立即处理。',
    'ai.rec.h.normal3': '按计划继续常规监测。',

    'ai.rec.h.warningTitle': '体温升高警告',
    'ai.rec.h.warn1': '体温（{t}\u00B0C）处于警告范围（37\u201338\u00B0C）。',
    'ai.rec.h.warn2': '保持充足水分摄入并休息。',
    'ai.rec.h.warn3': '每30分钟至1小时监测一次体温。',
    'ai.rec.h.warn4.adult': '考虑穿轻便衣物并保持室温舒适。',
    'ai.rec.h.warn4.elderly': '老年人：即使轻度升高也可能很重要。确保补水并考虑预约就医。',
    'ai.rec.h.warn4.infant': '婴儿：穿轻便衣服。确保充足液体摄入。如持续偏高请联系儿科医生。',
    'ai.rec.h.warn4.child': '儿童：鼓励多喝水、穿轻便衣服。关注活动量和食欲。',

    'ai.rec.h.feverTitle': '检测到发烧 \u2014 建议就医',
    'ai.rec.h.fever1': '体温（{t}\u00B0C）表明发烧（超过38\u00B0C）。',
    'ai.rec.h.fever2': '休息至关重要。避免剧烈活动。',
    'ai.rec.h.fever3': '增加液体摄入（水、电解质溶液、清汤）。',
    'ai.rec.h.fever4': '如适合，考虑使用非处方退烧药（对乙酰氨基酚或布洛芬）。',
    'ai.rec.h.fever5.adult': '如发烧持续超过24\u201348小时，请就医。',
    'ai.rec.h.fever5.elderly': '[紧急] 老年人：请立即就医评估。老年人发烧可能表示严重的潜在疾病。',
    'ai.rec.h.fever5.infant': '[紧急] 3个月以下婴儿：任何发烧请立即联系儿科医生。',
    'ai.rec.h.fever5.child': '[紧急] 儿童：使用适龄退烧药。注意脱水迹象。',
    'ai.rec.h.fever6': '关注其他症状：寒战、头痛、身体酸痛、咳嗽。如体温超过40\u00B0C请立即急救。',
    // 动物建议（3级：正常/警告/发烧）
    'ai.rec.a.petTitle': '宠物健康评估 \u2014 {animal}',

    'ai.rec.a.normalTitle': '{animal} \u2014 体温正常',
    'ai.rec.a.normal1': '您的{animal}体温（{t}\u00B0C）在正常范围内。',
    'ai.rec.a.normal2': '无需担心。继续常规监测。',
    'ai.rec.a.normal3': '照常关注食欲、活动水平和行为。',

    'ai.rec.a.warningTitle': '{animal} \u2014 体温升高',
    'ai.rec.a.warn1': '您的{animal}体温（{t}\u00B0C）略高于正常。',
    'ai.rec.a.warn2': '确保始终有新鲜饮水。',
    'ai.rec.a.warn3': '关注{animal}的食欲、精力和行为。',
    'ai.rec.a.warn4': '运动或兴奋后可能出现轻微升高。1\u20132小时后重新测量。',

    'ai.rec.a.feverTitle': '{animal} \u2014 检测到发烧',
    'ai.rec.a.fever1': '您的{animal}体温（{t}\u00B0C）表明发烧。',
    'ai.rec.a.fever2': '联系兽医获取指导。',
    'ai.rec.a.fever3': '确保有新鲜饮水和凉爽舒适的休息区域。',
    'ai.rec.a.fever4': '切勿给宠物服用人用退烧药 \u2014 很多对动物有毒。',
    'ai.rec.a.fever5': '让{animal}保持安静，限制体力活动。',
    'ai.act.seekImmediate': '立即就医',
    'ai.act.callEmergency40': '体温>40\u00B0C时拨打急救',
    'ai.act.emergencyVet': '寻求宠物急救',
    'ai.act.beginCooling': '开始降温',
    'ai.act.remeasure15': '15分钟后重测',
    'ai.act.warmEnv': '保暖环境',
    'ai.act.continueMonitor': '正常 \u2014 继续监测',
    'ai.act.hydrate': '保持水分',
    'ai.act.remeasure1h': '1小时后重测',
    'ai.act.rest': '休息',
    'ai.act.feverReducer': '考虑退烧药',
    'ai.act.scheduleDoc': '预约就医',
    'ai.act.increaseFluids': '增加液体摄入',
    'ai.act.seekMedical': '寻求医疗',
    'ai.act.adminFeverRed': '服用退烧药',
    'ai.act.coolCompress': '凉敷',
    'ai.act.callEmergency': '拨打急救电话',
    'ai.act.beginCoolingNow': '立即降温',
    'ai.act.goER': '前往急诊室',
    'ai.act.callVet': '联系兽医',
    'ai.act.ensureWater': '确保饮水',
    'ai.act.recheck1h': '1小时后复查',
    'ai.act.contactVet': '联系兽医',
    'ai.act.freshWaterCool': '新鲜水和凉爽区域',
    'ai.act.immediateVet': '立即看兽医',
    'ai.act.coolPaws': '凉爪垫和耳朵',
    'ai.act.emergencyVetNow': '宠物急救 立即！',

    // Missing translations added for 100% coverage
    'footer.citation': '参考文献：羟丙基纤维素（HPC）胆甾型液晶光子传感器用于实时体温监测。由东北大学（NEU）朱研究实验室开发。系统采用基于CIE色度的主波长提取和三次样条插值进行波长-温度映射。',
    'prediction.activeModel': '当前模型',
    'prediction.ensembleWt': '集成权重',
    'prediction.forecast': '{min}分钟预测',
    'prediction.mae': 'MAE (°C)',
    'prediction.trainSamples': '训练样本数',
    'val.absError': '|误差|',
    'val.actual': '实际值',
    'val.avgSpeed': '平均速度',
    'val.batchHint': '上传传感器图像以测试校准。如果文件名包含温度（如"37.5.png"或"sample-37.5.jpg"），将自动计算误差。',
    'val.batchMAE': '批量MAE',
    'val.batchRMSE': '批量RMSE',
    'val.batchTitle': '批量图像测试',
    'val.error': '误差',
    'val.file': '文件',
    'val.predicted': '预测值',

    // LLM引擎
    'llm.title': 'AI引擎设置',
    'llm.desc': '连接免费云端AI（Groq + Llama 3）获取个性化健康建议。规则引擎始终作为备用方案。',
    'llm.enable': '启用AI增强',
    'llm.apiUrl': 'API 接口地址',
    'llm.testBtn': '测试连接',
    'llm.info': '免费设置：注册 groq.com（获取API密钥）和 pythonanywhere.com（托管服务）。服务器代码在 flask_api/ 文件夹中。',
    'llm.enhanced': 'AI增强',
    'llm.source': 'AI模型',
    'llm.aiEnhanced': 'AI增强建议',
    'llm.loading': '正在咨询AI模型...',
    'llm.status.off': 'AI增强已关闭',
    'llm.status.noUrl': '未配置API地址',
    'llm.status.ready': 'AI增强已就绪',
    'llm.test.noUrl': '请先输入API地址。',
    'llm.test.testing': '正在测试连接...',
    'llm.test.success': '连接成功！',
    'llm.test.fail': '连接失败',
},
};


// ======================= I18N ENGINE ================================
class I18n {
    static currentLang = 'en';
    static fallback = 'en';

    /**
     * Initialize: load saved language or detect from browser
     */
    static init() {
        const saved = localStorage.getItem('hpc-lang');
        if (saved && I18N_LANGUAGES[saved]) {
            this.currentLang = saved;
        } else {
            // Auto-detect from browser
            const browserLang = (navigator.language || 'en').split('-')[0].toLowerCase();
            if (I18N_LANGUAGES[browserLang]) {
                this.currentLang = browserLang;
            }
        }
        this.apply();
        this.buildSelector();
    }

    /**
     * Get translation for key, with fallback to English
     */
    static t(key, replacements = {}) {
        const langStrings = I18N_STRINGS[this.currentLang] || {};
        const fallbackStrings = I18N_STRINGS[this.fallback] || {};
        let str = langStrings[key] || fallbackStrings[key] || key;

        // Replace {placeholders}
        for (const [k, v] of Object.entries(replacements)) {
            str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
        }
        return str;
    }

    /**
     * Set language and re-apply all translations
     */
    static setLang(lang) {
        if (!I18N_LANGUAGES[lang]) return;
        this.currentLang = lang;
        localStorage.setItem('hpc-lang', lang);

        // Set text direction for RTL languages
        const dir = I18N_LANGUAGES[lang].dir || 'ltr';
        document.documentElement.setAttribute('dir', dir);
        document.documentElement.setAttribute('lang', lang);

        this.apply();
        this.updateSelector();

        // Re-apply face labels if status card is active
        if (typeof SimpleUI !== 'undefined') {
            const label = document.getElementById('status-label');
            if (label && label.dataset.faceKey) {
                label.textContent = this.t('face.' + label.dataset.faceKey);
            }
            // Re-apply the status message too (if we have app context)
            const msgEl = document.getElementById('status-message');
            if (msgEl && typeof window.app !== 'undefined' && window.app.lastAnalysis) {
                const a = window.app.lastAnalysis;
                msgEl.textContent = SimpleUI.getSimpleMessage(a.riskLevel, a.trend, a.subjectType);
            }
        }
    }

    /**
     * Apply translations to all elements with data-i18n attribute
     */
    static apply() {
        // Text content
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) el.textContent = this.t(key);
        });

        // Placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (key) el.placeholder = this.t(key);
        });

        // Title attributes
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (key) el.title = this.t(key);
        });

        // Select option text
        document.querySelectorAll('[data-i18n-options]').forEach(select => {
            const mapping = JSON.parse(select.getAttribute('data-i18n-options') || '{}');
            select.querySelectorAll('option').forEach(opt => {
                const key = mapping[opt.value];
                if (key) opt.textContent = this.t(key);
            });
        });
    }

    /**
     * Build the language selector dropdown
     */
    static buildSelector() {
        const container = document.getElementById('lang-selector');
        if (!container) return;

        const btn = container.querySelector('.lang-btn');
        let dropdown = container.querySelector('.lang-dropdown');
        const overlay = document.getElementById('lang-overlay');
        if (!btn || !dropdown) return;

        // Move dropdown to body level so it escapes the header's stacking context
        document.body.appendChild(dropdown);

        // Populate dropdown
        dropdown.innerHTML = '';
        for (const [code, meta] of Object.entries(I18N_LANGUAGES)) {
            const item = document.createElement('button');
            item.className = 'lang-item' + (code === this.currentLang ? ' active' : '');
            item.dataset.lang = code;
            item.innerHTML = `<span class="lang-flag">${meta.flag}</span><span class="lang-name">${meta.name}</span>`;
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.setLang(code);
                this._closeLangDropdown(dropdown, overlay);
            });
            dropdown.appendChild(item);
        }

        // Helper: position dropdown relative to button using fixed coords
        const positionDropdown = () => {
            const rect = btn.getBoundingClientRect();
            const dw = dropdown.offsetWidth || 185;
            // Prefer right-aligned under button, but keep on-screen
            let left = rect.right - dw;
            if (left < 4) left = 4;
            if (left + dw > window.innerWidth - 4) left = window.innerWidth - dw - 4;
            dropdown.style.top = (rect.bottom + 6) + 'px';
            dropdown.style.left = left + 'px';
        };

        // Toggle dropdown on button click
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = dropdown.classList.contains('open');
            if (isOpen) {
                this._closeLangDropdown(dropdown, overlay);
            } else {
                dropdown.classList.add('open');
                if (overlay) overlay.classList.add('open');
                positionDropdown();
            }
        });

        // Close on overlay click
        if (overlay) {
            overlay.addEventListener('click', () => {
                this._closeLangDropdown(dropdown, overlay);
            });
        }

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && dropdown.classList.contains('open')) {
                this._closeLangDropdown(dropdown, overlay);
            }
        });

        // Reposition on scroll/resize when open
        const reposition = () => {
            if (dropdown.classList.contains('open')) positionDropdown();
        };
        window.addEventListener('resize', reposition);
        window.addEventListener('scroll', reposition, true);

        this.updateSelector();
    }

    /**
     * Close the language dropdown
     */
    static _closeLangDropdown(dropdown, overlay) {
        if (dropdown) dropdown.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
    }

    /**
     * Update the selector button text
     */
    static updateSelector() {
        const btn = document.querySelector('#lang-selector .lang-btn');
        if (!btn) return;
        const meta = I18N_LANGUAGES[this.currentLang];
        if (meta) btn.querySelector('.lang-current').textContent = meta.flag;

        // Update active state in dropdown (now in body, query by class)
        document.querySelectorAll('.lang-dropdown .lang-item').forEach(item => {
            item.classList.toggle('active', item.dataset.lang === this.currentLang);
        });
    }

    /**
     * Get the voice language code for speech synthesis
     */
    static getVoiceLang() {
        return I18N_LANGUAGES[this.currentLang]?.voice || 'en';
    }
}
