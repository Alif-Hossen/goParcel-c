
const pricingPlans = [
    {
        name: 'Basic',
        price: '৳ 149',
        subtitle: 'Perfect for light senders',
        features: [
            'Standard parcel delivery',
            'Door-to-door pickup',
            'SMS tracking updates',
            'Customer support'
        ]
    },
    {
        name: 'Standard',
        price: '৳ 249',
        subtitle: 'Best for regular customers',
        features: [
            'Express delivery within city',
            'Priority handling',
            'Live shipment tracking',
            'Easy returns support'
        ],
        featured: true
    },
    {
        name: 'Premium',
        price: '৳ 399',
        subtitle: 'Ideal for business deliveries',
        features: [
            'Same-day delivery',
            'Insurance coverage',
            'Dedicated customer care',
            'Flexible schedule pickup'
        ]
    }
];

const faqs = [
    {
        question: 'How do I choose the right plan?',
        answer: 'Choose Basic for occasional parcels, Standard for regular shipments, and Premium for time-sensitive or business deliveries.'
    },
    {
        question: 'Can I change my plan later?',
        answer: 'Yes. You can upgrade or switch plans any time through our customer support team or during checkout.'
    },
    {
        question: 'Do you offer discounts for frequent senders?',
        answer: 'Yes. Frequent and business customers can contact us for custom volume pricing and dedicated service options.'
    }
];

const Pricing = () => {
    return (
        <div className="px-6 py-10 lg:px-12">
            <div className="max-w-5xl mx-auto text-center">
                <p className="text-sm uppercase text-primary font-semibold">Transparent shipping</p>
                <h1 className="text-4xl lg:text-5xl font-bold mt-4 text-black">Pricing plans built for every parcel.</h1>
                <p className="text-base text-gray-600 mt-4 leading-8">Choose a package that fits your sending frequency and delivery needs. No hidden fees, just easy and reliable parcel service across Bangladesh.</p>
            </div>

            <div className="grid gap-6 mt-12 lg:grid-cols-3">
                {pricingPlans.map((plan, index) => (
                    <div key={index} className={`border rounded-3xl p-8 shadow-sm ${plan.featured ? 'border-primary bg-primary/10' : 'bg-white'}`}>
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-2xl font-bold">{plan.name}</h2>
                                <p className="text-sm text-gray-500 mt-1">{plan.subtitle}</p>
                            </div>
                            {plan.featured && <span className="badge badge-secondary">Most popular</span>}
                        </div>
                        <div className="mb-8">
                            <p className="text-5xl font-extrabold text-black">{plan.price}</p>
                            <p className="text-sm text-gray-500 mt-2">per parcel</p>
                        </div>
                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3 text-gray-700">
                                    <span className="mt-1 text-primary">•</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className={`btn w-full ${plan.featured ? 'btn-primary text-black' : 'btn-outline'}`}>Choose {plan.name}</button>
                    </div>
                ))}
            </div>

            <div className="max-w-4xl mx-auto mt-16 bg-white border border-base-200 rounded-3xl p-8 shadow-sm">
                <h2 className="text-3xl font-bold text-black">Frequently asked questions</h2>
                <div className="mt-8 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="rounded-2xl border border-base-200 p-6">
                            <h3 className="text-xl font-semibold text-black">{faq.question}</h3>
                            <p className="text-gray-600 mt-3">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
