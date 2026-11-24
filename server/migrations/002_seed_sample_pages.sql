INSERT INTO landing_pages (subdomain, template_type, content, meta_title, meta_description) VALUES
(
    'engineering',
    'lead-gen',
    '{"heading": "Engineering Admissions 2026", "subheading": "Get expert guidance for top engineering colleges. Fill the form and our counsellors will reach out.", "buttonText": "Enquire Now", "themeColor": "#2563eb", "backgroundColor": "#f8fafc", "headingColor": "#111827", "textColor": "#4b5563"}',
    'Engineering Admissions | IIMSR',
    'Apply for engineering admissions through IIMSR and get expert counselling support.'
),
(
    'medical',
    'general-info',
    '{"heading": "Medical College Guidance", "body": "We help you find the best medical colleges based on your rank, budget and location preferences.", "image": "", "backgroundColor": "#ffffff", "headingColor": "#111827", "textColor": "#374151"}',
    'Medical Admissions | IIMSR',
    'Medical college guidance and admission support for aspiring doctors.'
),
(
    'campaign-video',
    'video-layout',
    '{"heading": "Watch Our Latest Campus Tour", "description": "Explore IIMSR partner campuses from the comfort of your home.", "videoUrl": "", "backgroundColor": "#0f172a", "headingColor": "#ffffff", "textColor": "#d1d5db"}',
    'Campus Tour | IIMSR',
    'Watch the latest virtual campus tour video.'
)
ON DUPLICATE KEY UPDATE
    template_type = VALUES(template_type),
    content = VALUES(content),
    meta_title = VALUES(meta_title),
    meta_description = VALUES(meta_description);
