// Website Downtime Cost Calculator - TechImpact.online
class WebsiteDowntimeCalculator {
    constructor() {
        this.currentLanguage = 'en';
        this.strings = this.initializeStrings();
        this.initializeEventListeners();
        this.initializeCounters();
        this.calculateImpact(); // Initial calculation
        this.updateURLHash(); // Update URL with current parameters
        
        console.log('🚀 Website Downtime Calculator initialized successfully');
    }

    initializeStrings() {
        return {
            en: {
                'nav.product': 'Product',
                'nav.pricing': 'Pricing',
                'nav.resources': 'Resources',
                'nav.blog': 'Blog',
                'header.get-started': 'Get Started',
                'hero.title1': 'Calculate the True Cost of',
                'hero.title2': 'Website Downtime',
                'hero.subtitle': 'Assess the financial impact of outages with precision. Calculate revenue loss, refund costs, and productivity impact to make informed decisions about your infrastructure investments.',
                'hero.start-trial': 'Start Free Trial',
                'hero.request-demo': 'Request Demo',
                'tabs.sla': 'SLA Penalty Calculator',
                'tabs.downtime': 'Website Downtime Cost',
                'tabs.rto-rpo': 'RTO/RPO Impact',
                'form.title': 'Downtime Cost Calculator',
                'form.revenue-per-hour': 'Revenue per Hour',
                'form.outage-duration': 'Outage Duration',
                'form.timestamp-start': 'Or Start Time',
                'form.timestamp-end': 'End Time',
                'form.refund-rate': 'Refund Rate (%)',
                'form.refund-rate-hint': 'Percentage of affected customers who request refunds',
                'form.conversion-drop': 'Conversion Drop (%)',
                'form.conversion-drop-hint': 'Expected decrease in conversions during/after outage',
                'form.affected-employees': 'Affected Employees',
                'form.hourly-cost-per-employee': 'Hourly Cost per Employee',
                'form.incidents-per-year': 'Incidents per Year:',
                'form.calculate': 'Calculate Impact',
                'form.reset': 'Reset',
                'results.title': 'Impact Analysis',
                'results.total-loss': 'Total Loss',
                'results.cumulative-loss': 'Cumulative Loss Over Time',
                'results.breakdown': 'Cost Breakdown',
                'results.revenue-loss': 'Revenue Loss:',
                'results.refund-costs': 'Refund Costs:',
                'results.productivity-loss': 'Productivity Loss:',
                'results.conversion-drop': 'Conversion Drop Impact:',
                'results.annualized-impact': 'Annualized Impact',
                'results.annual-loss': 'Annual Loss',
                'results.copy-summary': 'Copy Summary',
                'results.download-csv': 'Download CSV',
                'results.share-link': 'Share Link',
                'how-it-works.title': 'How It Works',
                'how-it-works.step1.title': 'Input Your Metrics',
                'how-it-works.step1.description': 'Enter your hourly revenue rate, outage duration, and any additional costs like refunds or employee impact.',
                'how-it-works.step2.title': 'Calculate Direct Losses',
                'how-it-works.step2.description': 'We calculate revenue loss, refund costs, and productivity impact based on your specific parameters.',
                'how-it-works.step3.title': 'Analyze Cumulative Impact',
                'how-it-works.step3.description': 'View the cumulative loss over time with our visual sparkline chart and breakdown analysis.',
                'how-it-works.step4.title': 'Export and Share',
                'how-it-works.step4.description': 'Copy summaries, download CSV reports, or share links with stakeholders for informed decision-making.',
                'stats.calculations': 'Downtime Calculations',
                'stats.teams-impacted': 'Teams Impacted',
                'stats.avg-downtime': 'Avg Downtime (hours)',
                'stats.accuracy': 'Accuracy Rate (%)',
                'faq.title': 'Frequently Asked Questions',
                'faq.q1.question': 'What factors affect downtime cost?',
                'faq.q1.answer': 'Key factors include hourly revenue rate, outage duration, refund percentage, conversion drop rate, and employee productivity costs. Each factor can significantly impact the total financial loss.',
                'faq.q2.question': 'How do I calculate annualized downtime impact?',
                'faq.q2.answer': 'Multiply the single incident cost by the expected number of similar outages per year to get annualized impact. This helps budget for infrastructure improvements.',
                'faq.q3.question': 'Should I include employee costs in downtime calculations?',
                'faq.q3.answer': 'Yes, include employee costs when staff cannot work effectively during outages, including support team overtime and lost productivity from system unavailability.',
                'faq.q4.question': 'What\'s the difference between revenue loss and refund costs?',
                'faq.q4.answer': 'Revenue loss is the direct income you miss during the outage. Refund costs are additional expenses when customers demand their money back due to the service disruption.',
                'faq.q5.question': 'How accurate are these downtime cost estimates?',
                'faq.q5.answer': 'Our calculations provide reliable estimates based on standard business metrics. Accuracy depends on the quality of your input data, particularly revenue rates and employee costs.',
                'footer.product': 'Product',
                'footer.features': 'Features',
                'footer.pricing': 'Pricing',
                'footer.integrations': 'Integrations',
                'footer.company': 'Company',
                'footer.about': 'About',
                'footer.blog': 'Blog',
                'footer.careers': 'Careers',
                'footer.support': 'Support',
                'footer.help': 'Help Center',
                'footer.contact': 'Contact',
                'footer.status': 'Status',
                'footer.legal': 'Legal',
                'footer.privacy': 'Privacy',
                'footer.terms': 'Terms',
                'footer.cookies': 'Cookies',
                'disclaimer.text': 'Estimates only. Not financial advice.'
            },
            es: {
                'nav.product': 'Producto',
                'nav.pricing': 'Precios',
                'nav.resources': 'Recursos',
                'nav.blog': 'Blog',
                'header.get-started': 'Comenzar',
                'hero.title1': 'Calcula el Verdadero Costo de',
                'hero.title2': 'Tiempo de Inactividad del Sitio',
                'hero.subtitle': 'Evalúa el impacto financiero de las interrupciones con precisión. Calcula pérdidas de ingresos, costos de reembolsos e impacto en productividad para tomar decisiones informadas sobre tus inversiones en infraestructura.',
                'hero.start-trial': 'Iniciar Prueba Gratuita',
                'hero.request-demo': 'Solicitar Demo',
                'tabs.sla': 'Calculadora de Penalizaciones SLA',
                'tabs.downtime': 'Costo de Tiempo de Inactividad',
                'tabs.rto-rpo': 'Impacto RTO/RPO',
                'form.title': 'Calculadora de Costo de Tiempo de Inactividad',
                'form.revenue-per-hour': 'Ingresos por Hora',
                'form.outage-duration': 'Duración de la Interrupción',
                'form.timestamp-start': 'O Hora de Inicio',
                'form.timestamp-end': 'Hora de Finalización',
                'form.refund-rate': 'Tasa de Reembolso (%)',
                'form.refund-rate-hint': 'Porcentaje de clientes afectados que solicitan reembolsos',
                'form.conversion-drop': 'Caída de Conversión (%)',
                'form.conversion-drop-hint': 'Disminución esperada en conversiones durante/después de la interrupción',
                'form.affected-employees': 'Empleados Afectados',
                'form.hourly-cost-per-employee': 'Costo por Hora por Empleado',
                'form.incidents-per-year': 'Incidentes por Año:',
                'form.calculate': 'Calcular Impacto',
                'form.reset': 'Reiniciar',
                'results.title': 'Análisis de Impacto',
                'results.total-loss': 'Pérdida Total',
                'results.cumulative-loss': 'Pérdida Acumulada en el Tiempo',
                'results.breakdown': 'Desglose de Costos',
                'results.revenue-loss': 'Pérdida de Ingresos:',
                'results.refund-costs': 'Costos de Reembolso:',
                'results.productivity-loss': 'Pérdida de Productividad:',
                'results.conversion-drop': 'Impacto de Caída de Conversión:',
                'results.annualized-impact': 'Impacto Anualizado',
                'results.annual-loss': 'Pérdida Anual',
                'results.copy-summary': 'Copiar Resumen',
                'results.download-csv': 'Descargar CSV',
                'results.share-link': 'Compartir Enlace',
                'how-it-works.title': 'Cómo Funciona',
                'how-it-works.step1.title': 'Ingresa tus Métricas',
                'how-it-works.step1.description': 'Ingresa tu tasa de ingresos por hora, duración de la interrupción y cualquier costo adicional como reembolsos o impacto en empleados.',
                'how-it-works.step2.title': 'Calcula Pérdidas Directas',
                'how-it-works.step2.description': 'Calculamos pérdidas de ingresos, costos de reembolsos e impacto en productividad basado en tus parámetros específicos.',
                'how-it-works.step3.title': 'Analiza Impacto Acumulativo',
                'how-it-works.step3.description': 'Ve la pérdida acumulada en el tiempo con nuestro gráfico de líneas visual y análisis de desglose.',
                'how-it-works.step4.title': 'Exportar y Compartir',
                'how-it-works.step4.description': 'Copia resúmenes, descarga reportes CSV o comparte enlaces con partes interesadas para toma de decisiones informadas.',
                'stats.calculations': 'Cálculos de Tiempo de Inactividad',
                'stats.teams-impacted': 'Equipos Impactados',
                'stats.avg-downtime': 'Tiempo de Inactividad Promedio (horas)',
                'stats.accuracy': 'Tasa de Precisión (%)',
                'faq.title': 'Preguntas Frecuentes',
                'faq.q1.question': '¿Qué factores afectan el costo del tiempo de inactividad?',
                'faq.q1.answer': 'Los factores clave incluyen la tasa de ingresos por hora, duración de la interrupción, porcentaje de reembolsos, tasa de caída de conversión y costos de productividad de empleados. Cada factor puede impactar significativamente la pérdida financiera total.',
                'faq.q2.question': '¿Cómo calculo el impacto anualizado del tiempo de inactividad?',
                'faq.q2.answer': 'Multiplica el costo de un incidente individual por el número esperado de interrupciones similares por año para obtener el impacto anualizado. Esto ayuda a presupuestar mejoras de infraestructura.',
                'faq.q3.question': '¿Debería incluir costos de empleados en cálculos de tiempo de inactividad?',
                'faq.q3.answer': 'Sí, incluye costos de empleados cuando el personal no puede trabajar efectivamente durante interrupciones, incluyendo horas extras del equipo de soporte y pérdida de productividad por indisponibilidad del sistema.',
                'faq.q4.question': '¿Cuál es la diferencia entre pérdida de ingresos y costos de reembolso?',
                'faq.q4.answer': 'La pérdida de ingresos es el ingreso directo que pierdes durante la interrupción. Los costos de reembolso son gastos adicionales cuando los clientes exigen su dinero de vuelta debido a la interrupción del servicio.',
                'faq.q5.question': '¿Qué tan precisas son estas estimaciones de costo de tiempo de inactividad?',
                'faq.q5.answer': 'Nuestros cálculos proporcionan estimaciones confiables basadas en métricas comerciales estándar. La precisión depende de la calidad de tus datos de entrada, particularmente las tasas de ingresos y costos de empleados.',
                'footer.product': 'Producto',
                'footer.features': 'Características',
                'footer.pricing': 'Precios',
                'footer.integrations': 'Integraciones',
                'footer.company': 'Empresa',
                'footer.about': 'Acerca de',
                'footer.blog': 'Blog',
                'footer.careers': 'Carreras',
                'footer.support': 'Soporte',
                'footer.help': 'Centro de Ayuda',
                'footer.contact': 'Contacto',
                'footer.status': 'Estado',
                'footer.legal': 'Legal',
                'footer.privacy': 'Privacidad',
                'footer.terms': 'Términos',
                'footer.cookies': 'Cookies',
                'disclaimer.text': 'Solo estimaciones. No es consejo financiero.'
            }
        };
    }

    initializeEventListeners() {
        // Calculate button
        const calculateBtn = document.getElementById('calculate-btn');
        if (calculateBtn) {
            calculateBtn.addEventListener('click', () => {
                console.log('🔘 Calculate button clicked!');
                this.calculateImpact();
            });
            console.log('✅ Calculate button event listener attached');
        } else {
            console.error('❌ Calculate button not found!');
        }
        
        // Reset button
        document.getElementById('reset-btn').addEventListener('click', () => this.resetForm());
        
        // Export buttons
        document.getElementById('copy-summary-btn').addEventListener('click', () => this.copySummary());
        document.getElementById('download-csv-btn').addEventListener('click', () => this.downloadCSV());
        document.getElementById('share-link-btn').addEventListener('click', () => this.shareLink());
        
        // Form inputs
        document.getElementById('revenue-per-hour').addEventListener('input', () => this.calculateImpact());
        document.getElementById('outage-hours').addEventListener('input', () => this.calculateImpact());
        document.getElementById('outage-minutes').addEventListener('input', () => this.calculateImpact());
        document.getElementById('timestamp-start').addEventListener('change', () => this.calculateImpact());
        document.getElementById('timestamp-end').addEventListener('change', () => this.calculateImpact());
        document.getElementById('refund-rate').addEventListener('input', () => this.calculateImpact());
        document.getElementById('conversion-drop').addEventListener('input', () => this.calculateImpact());
        document.getElementById('affected-employees').addEventListener('input', () => this.calculateImpact());
        document.getElementById('hourly-cost-per-employee').addEventListener('input', () => this.calculateImpact());
        document.getElementById('currency').addEventListener('change', () => this.calculateImpact());
        document.getElementById('employee-currency').addEventListener('change', () => this.calculateImpact());
        
        // Annualized impact
        document.getElementById('incidents-per-year').addEventListener('input', () => this.calculateImpact());
        
        // Language toggle
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.changeLanguage(e.target.dataset.lang));
        });
        
        // FAQ accordion
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => this.toggleFAQ(question));
        });
    }

    initializeCounters() {
        // Animate counter numbers
        document.querySelectorAll('.stat-number').forEach(element => {
            const target = parseFloat(element.dataset.count);
            const increment = target / 100;
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                if (target < 10) {
                    element.textContent = current.toFixed(1);
                } else {
                    element.textContent = Math.floor(current).toLocaleString() + '+';
                }
            }, 16);
        });
    }

    calculateImpact() {
        console.log('🔄 Calculate Impact button clicked - starting calculation...');
        
        // Get input values
        const revenuePerHour = DowntimeMath.parseLocaleNumber(document.getElementById('revenue-per-hour').value);
        const outageHours = DowntimeMath.parseLocaleNumber(document.getElementById('outage-hours').value);
        const outageMinutes = DowntimeMath.parseLocaleNumber(document.getElementById('outage-minutes').value);
        const refundRate = DowntimeMath.parseLocaleNumber(document.getElementById('refund-rate').value);
        const conversionDropRate = DowntimeMath.parseLocaleNumber(document.getElementById('conversion-drop').value);
        const affectedEmployees = DowntimeMath.parseLocaleNumber(document.getElementById('affected-employees').value);
        const hourlyCostPerEmployee = DowntimeMath.parseLocaleNumber(document.getElementById('hourly-cost-per-employee').value);
        
        // Get timestamps if provided
        const startTimeStr = document.getElementById('timestamp-start').value;
        const endTimeStr = document.getElementById('timestamp-end').value;
        const startTime = startTimeStr ? new Date(startTimeStr) : null;
        const endTime = endTimeStr ? new Date(endTimeStr) : null;
        
        console.log('Input values:', { 
            revenuePerHour, outageHours, outageMinutes, refundRate, 
            conversionDropRate, affectedEmployees, hourlyCostPerEmployee,
            startTime, endTime 
        });
        
        // Calculate duration
        const durationHours = DowntimeMath.calculateDuration(outageHours, outageMinutes, startTime, endTime);
        console.log('Calculated duration:', durationHours, 'hours');
        
        // Validate inputs
        const validation = DowntimeMath.validateInputs({
            revenuePerHour,
            durationHours,
            refundRate,
            conversionDropRate,
            affectedEmployees,
            hourlyCostPerEmployee
        });
        
        if (!validation.valid) {
            console.log('❌ Input validation failed:', validation.errors);
            this.showValidationErrors(validation.errors);
            return;
        }
        
        // Calculate downtime cost
        const result = DowntimeMath.calculateDowntimeCost({
            revenuePerHour,
            durationHours,
            refundRate,
            conversionDropRate,
            affectedEmployees,
            hourlyCostPerEmployee
        });
        
        console.log('Downtime calculation result:', result);
        
        // Update UI with results
        this.updateResults(result);
        
        // Update URL hash
        this.updateURLHash();
        
        console.log('✅ Calculation complete - UI updated');
    }

    updateResults(result) {
        const currency = document.getElementById('currency').value;
        const incidentsPerYear = DowntimeMath.parseLocaleNumber(document.getElementById('incidents-per-year').value);
        
        // Update main results
        document.getElementById('total-loss-amount').textContent = FormatUtils.formatCurrency(result.totalLoss, currency);
        document.getElementById('revenue-loss').textContent = FormatUtils.formatCurrency(result.revenueLoss, currency);
        document.getElementById('refund-costs').textContent = FormatUtils.formatCurrency(result.refundCosts, currency);
        document.getElementById('productivity-loss').textContent = FormatUtils.formatCurrency(result.productivityLoss, currency);
        document.getElementById('conversion-drop-impact').textContent = FormatUtils.formatCurrency(result.conversionDropImpact, currency);
        
        // Update annualized impact
        const annualLoss = DowntimeMath.calculateAnnualizedImpact(result.totalLoss, incidentsPerYear);
        document.getElementById('annual-loss').textContent = FormatUtils.formatCurrency(annualLoss, currency);
        
        // Update sparkline chart
        this.updateSparkline(result.totalLoss, result.durationHours, currency);
        
        // Clear any previous validation errors
        this.clearValidationErrors();
    }

    updateSparkline(totalLoss, durationHours, currency) {
        const canvas = document.getElementById('loss-sparkline');
        if (canvas && totalLoss > 0) {
            Sparkline.drawCumulativeLoss(canvas, totalLoss, durationHours, currency);
        }
    }

    showValidationErrors(errors) {
        // Create or update error display
        let errorContainer = document.getElementById('validation-errors');
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.id = 'validation-errors';
            errorContainer.className = 'validation-errors';
            document.querySelector('.calculator-form .card').appendChild(errorContainer);
        }
        
        errorContainer.innerHTML = errors.map(error => 
            `<div class="error-item">❌ ${error}</div>`
        ).join('');
        errorContainer.style.display = 'block';
    }

    clearValidationErrors() {
        const errorContainer = document.getElementById('validation-errors');
        if (errorContainer) {
            errorContainer.style.display = 'none';
        }
    }

    copySummary() {
        const summary = this.generateSummary();
        navigator.clipboard.writeText(summary).then(() => {
            this.showToast('Summary copied to clipboard!');
        }).catch(() => {
            this.showToast('Failed to copy summary');
        });
    }

    downloadCSV() {
        const csv = this.generateCSV();
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'downtime-cost-analysis.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
        
        this.showToast('CSV downloaded successfully!');
    }

    shareLink() {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            this.showToast('Share link copied to clipboard!');
        }).catch(() => {
            this.showToast('Failed to copy share link');
        });
    }

    generateSummary() {
        const revenueLoss = document.getElementById('revenue-loss').textContent;
        const refundCosts = document.getElementById('refund-costs').textContent;
        const productivityLoss = document.getElementById('productivity-loss').textContent;
        const conversionDropImpact = document.getElementById('conversion-drop-impact').textContent;
        const totalLoss = document.getElementById('total-loss-amount').textContent;
        const annualLoss = document.getElementById('annual-loss').textContent;
        
        return `Downtime Cost Analysis Summary:
        
Total Loss: ${totalLoss}
- Revenue Loss: ${revenueLoss}
- Refund Costs: ${refundCosts}
- Productivity Loss: ${productivityLoss}
- Conversion Drop Impact: ${conversionDropImpact}

Annualized Impact: ${annualLoss}

Generated by TechImpact.online Downtime Cost Calculator`;
    }

    generateCSV() {
        const headers = ['Metric', 'Amount'];
        const rows = [
            ['Revenue Loss', document.getElementById('revenue-loss').textContent],
            ['Refund Costs', document.getElementById('refund-costs').textContent],
            ['Productivity Loss', document.getElementById('productivity-loss').textContent],
            ['Conversion Drop Impact', document.getElementById('conversion-drop-impact').textContent],
            ['Total Loss', document.getElementById('total-loss-amount').textContent],
            ['Annual Loss', document.getElementById('annual-loss').textContent]
        ];
        
        const csvContent = [headers, ...rows]
            .map(row => row.map(field => `"${field}"`).join(','))
            .join('\n');
        
        return csvContent;
    }

    updateURLHash() {
        // Create URL hash with current parameters
        const params = {
            revenue: document.getElementById('revenue-per-hour').value,
            hours: document.getElementById('outage-hours').value,
            minutes: document.getElementById('outage-minutes').value,
            refund: document.getElementById('refund-rate').value,
            conversion: document.getElementById('conversion-drop').value,
            employees: document.getElementById('affected-employees').value,
            hourlyCost: document.getElementById('hourly-cost-per-employee').value,
            incidents: document.getElementById('incidents-per-year').value
        };
        
        const hash = btoa(JSON.stringify(params));
        if (window.history.replaceState) {
            window.history.replaceState(null, null, `#${hash}`);
        }
    }

    loadFromURLHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            try {
                const params = JSON.parse(atob(hash));
                document.getElementById('revenue-per-hour').value = params.revenue || '';
                document.getElementById('outage-hours').value = params.hours || '';
                document.getElementById('outage-minutes').value = params.minutes || '';
                document.getElementById('refund-rate').value = params.refund || '';
                document.getElementById('conversion-drop').value = params.conversion || '';
                document.getElementById('affected-employees').value = params.employees || '';
                document.getElementById('hourly-cost-per-employee').value = params.hourlyCost || '';
                document.getElementById('incidents-per-year').value = params.incidents || '';
                
                this.calculateImpact();
            } catch (error) {
                console.log('Failed to parse URL hash:', error);
            }
        }
    }

    resetForm() {
        document.getElementById('revenue-per-hour').value = '10000';
        document.getElementById('outage-hours').value = '2';
        document.getElementById('outage-minutes').value = '30';
        document.getElementById('refund-rate').value = '5';
        document.getElementById('conversion-drop').value = '15';
        document.getElementById('affected-employees').value = '50';
        document.getElementById('hourly-cost-per-employee').value = '50';
        document.getElementById('incidents-per-year').value = '12';
        document.getElementById('timestamp-start').value = '';
        document.getElementById('timestamp-end').value = '';
        
        this.calculateImpact();
        this.showToast('Form reset to default values');
    }

    showToast(message) {
        // Create toast notification
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 12px 20px;
            border-radius: 8px;
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(toast);
            }, 300);
        }, 3000);
    }

    toggleFAQ(question) {
        const answer = question.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        
        // Close all other FAQs
        document.querySelectorAll('.faq-answer').forEach(ans => {
            ans.style.display = 'none';
        });
        
        // Toggle current FAQ
        answer.style.display = isOpen ? 'none' : 'block';
    }

    changeLanguage(lang) {
        this.currentLanguage = lang;
        
        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
        
        // Update all text elements
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.dataset.i18n;
            if (this.strings[lang] && this.strings[lang][key]) {
                element.textContent = this.strings[lang][key];
            }
        });
    }

    // Manual test function for debugging
    testCalculation() {
        console.log('🧪 Running manual calculation test...');
        
        // Set test values
        document.getElementById('revenue-per-hour').value = '10000';
        document.getElementById('outage-hours').value = '2';
        document.getElementById('outage-minutes').value = '30';
        document.getElementById('refund-rate').value = '5';
        document.getElementById('affected-employees').value = '50';
        document.getElementById('hourly-cost-per-employee').value = '50';
        
        console.log('Test values set, running calculation...');
        this.calculateImpact();
    }
}

// Initialize the calculator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.downtimeCalculator = new WebsiteDowntimeCalculator();
    console.log('🌐 Downtime Calculator available globally as window.downtimeCalculator');
    console.log('💡 Try: window.downtimeCalculator.testCalculation() to test manually');
    
    // Load parameters from URL hash if present
    window.downtimeCalculator.loadFromURLHash();
});
