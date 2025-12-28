const { useState, useEffect } = React;

// --- ICONS (Roblox Style - Simple, functional) ---
// Using standard Lucide icons but mapped to look closer to Roblox's functional icons
const IconMenu = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>);
const IconSearch = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const IconBell = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>);
const IconSettings = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>);
const IconRobux = ({ className }) => (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2L19.5 6.33V15.0001L12 19.3301L4.5 15.0001V6.33L12 2Z" stroke="white" strokeWidth="2.5" fill="none" /><rect x="9.5" y="9.5" width="5" height="5" stroke="white" strokeWidth="2.5" rx="1" /></svg>); // Custom Hexagon

// Sidebar Icons
const IconHome = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" fill="none" strokeWidth="2"></polyline></svg>);
const IconUser = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>);
const IconMessage = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>);
const IconFriends = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>);
const IconAvatar = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>);
const IconInventory = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>);
const IconTrade = ({ className }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>);

// --- COMPONENTS ---

const Header = ({ robux, setRobux }) => {
    return (
        <header className="fixed top-0 left-0 right-0 h-14 bg-rbx-header border-b border-rbx-div z-50 flex items-center justify-between px-3">
            {/* Left: Nav & Logo */}
            <div className="flex items-center gap-4">
                <button className="text-white hover:opacity-80 p-1"><IconMenu className="w-6 h-6" /></button>
                <div className="flex items-center gap-6">
                    <h1 className="text-2xl font-extrabold tracking-tight cursor-pointer hover:opacity-90">ROBLOX</h1>
                    <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-white">
                        <a href="#" className="hover:opacity-80">Discover</a>
                        <a href="#" className="hover:opacity-80">Marketplace</a>
                        <a href="#" className="hover:opacity-80">Create</a>
                        <a href="#" className="hover:opacity-80">Robux</a>
                    </nav>
                </div>
            </div>

            {/* Center: Search */}
            <div className="hidden md:flex flex-1 max-w-2xl mx-6">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-rbx-card text-white text-sm py-1.5 pl-3 pr-10 rounded border border-transparent focus:border-white focus:bg-rbx-bg transition-colors placeholder:text-gray-500 outline-none"
                    />
                    <IconSearch className="absolute right-2 top-1.5 w-5 h-5 text-gray-400" />
                </div>
            </div>

            {/* Right: User & Robux */}
            <div className="flex items-center gap-2">
                <div className="bg-white/10 rounded-full px-3 py-1 flex items-center gap-2 cursor-pointer hover:bg-white/20 transition-colors mr-2">
                    <IconRobux className="w-5 h-5 pb-0.5" />
                    <input
                        type="number"
                        value={robux} // Robux Amount
                        onChange={(e) => setRobux(Number(e.target.value))}
                        className="bg-transparent border-none text-white text-sm font-bold w-16 outline-none text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                </div>
                <button className="p-2 hover:bg-white/10 rounded-full"><IconBell className="w-6 h-6 text-white" /></button>
                <button className="p-2 hover:bg-white/10 rounded-full"><IconSettings className="w-6 h-6 text-white" /></button>
                <div className="w-8 h-8 rounded-full bg-gray-500 overflow-hidden border border-white/20 ml-1 cursor-pointer">
                    <img src="https://tr.rbxcdn.com/30cda22cc596baa8b08253a808940801/150/150/AvatarHeadshot/Png" alt="User" className="w-full h-full object-cover" onError={(e) => e.target.style.display = 'none'} />
                </div>
            </div>
        </header>
    );
};

const Sidebar = () => {
    const items = [
        { label: 'Home', icon: IconHome, active: true },
        { label: 'Profile', icon: IconUser },
        { label: 'Messages', icon: IconMessage },
        { label: 'Friends', icon: IconFriends },
        { label: 'Avatar', icon: IconAvatar },
        { label: 'Inventory', icon: IconInventory },
        { label: 'Trade', icon: IconTrade },
    ];

    return (
        <aside className="fixed left-0 top-14 bottom-0 w-20 md:w-64 bg-rbx-bg border-r border-transparent md:border-none p-2 pt-4 flex flex-col gap-1 z-40 overflow-y-auto">
            {items.map((item, i) => (
                <a key={i} href="#" className={`flex items-center gap-3 px-3 py-2 rounded-lg text-base font-semibold transition-colors ${item.active ? 'text-white' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}>
                    <item.icon className="w-6 h-6" />
                    <span className="hidden md:inline">{item.label}</span>
                </a>
            ))}
        </aside>
    );
};

// --- MAIN CONTENT ---

const TransferSection = ({ robux, setRobux, onAddTransaction }) => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!recipient || !amount) return;

        setIsSubmitting(true);
        setTimeout(() => {
            onAddTransaction(recipient, Number(amount));
            setRobux(prev => Math.max(0, prev - Number(amount)));
            setRecipient('');
            setAmount('');
            setIsSubmitting(false);
        }, 1500); // Realistic slight delay
    }

    return (
        <div className="bg-rbx-card rounded-lg p-6 w-full max-w-2xl mx-auto shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-white">Transfer Robux</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Username Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-300">Recipient Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        value={recipient}
                        onChange={(e) => setRecipient(e.target.value)}
                        className="bg-rbx-bg border border-rbx-div rounded-md p-2.5 text-white placeholder:text-gray-600 focus:border-white outline-none transition-colors"
                    />
                </div>

                {/* Amount Input */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-300">Amount (R$)</label>
                    <div className="relative">
                        <input
                            type="number"
                            placeholder="0"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-rbx-bg border border-rbx-div rounded-md p-2.5 pl-10 text-white placeholder:text-gray-600 focus:border-white outline-none transition-colors"
                        />
                        <div className="absolute left-3 top-2.5 pointer-events-none">
                            <IconRobux className="w-5 h-5 scale-75" />
                        </div>
                    </div>
                </div>

                {/* Distribute Button */}
                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2.5 rounded-md font-bold text-base transition-all ${isSubmitting ? 'bg-gray-600 text-gray-400 cursor-not-allowed' : 'bg-white text-black hover:opacity-90 active:scale-[0.99]'}`}
                    >
                        {isSubmitting ? 'Processing...' : 'Distribute Funds'}
                    </button>
                </div>
            </form>

            <p className="mt-4 text-xs text-gray-500 text-center">
                Funds will be held in escrow for up to 12 hours prior to deposit. <br />
                Standard platform fees apply to all transactions.
            </p>
        </div>
    );
};

const TransactionsList = ({ transactions }) => {
    return (
        <div className="bg-rbx-card rounded-lg p-0 w-full max-w-4xl mx-auto shadow-sm overflow-hidden mt-8">
            <div className="p-4 border-b border-rbx-div flex justify-between items-center">
                <h3 className="font-bold text-lg text-white">Recent Payouts</h3>
                <button className="text-xs text-gray-400 font-bold uppercase hover:text-white">View All</button>
            </div>

            <div className="flex flex-col">
                {transactions.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">No transactions found.</div>
                ) : (
                    transactions.map((t, idx) => (
                        <div key={idx} className="flex items-center justify-between p-4 border-b border-rbx-div last:border-0 hover:bg-white/5 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center overflow-hidden">
                                    {/* Mock User Avatar Placeholder */}
                                    <IconUser className="text-gray-400 w-6 h-6" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white font-bold text-sm">{t.recipient}</span>
                                    <span className="text-xs text-gray-500">Payout ID: {Math.floor(Math.random() * 90000000) + 10000000}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <div className="flex items-center gap-1">
                                    <IconRobux className="w-4 h-4" />
                                    <span className="font-bold text-white text-sm">-{t.amount}</span>
                                </div>
                                <span className={`text-xs font-bold ${t.status === 'Pending' ? 'text-orange-400' : 'text-green-500'}`}>
                                    {t.status}
                                </span>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

// --- APP ROOT ---
const App = () => {
    const [robux, setRobux] = useState(15420);
    const [transactions, setTransactions] = useState([
        { recipient: 'BuilderMan', amount: 500, status: 'Completed' },
        { recipient: 'JaneDoe_123', amount: 150, status: 'Completed' },
    ]);
    const [toast, setToast] = useState(null);

    const handleTransaction = (recipient, amount) => {
        const newTx = { recipient, amount, status: 'Pending' };
        setTransactions([newTx, ...transactions]);
        setToast(`Successfully sent ${amount} R$ to ${recipient}`);
        setTimeout(() => setToast(null), 4000);
    };

    return (
        <div className="min-h-screen bg-rbx-bg pt-14">
            <Header robux={robux} setRobux={setRobux} />
            <Sidebar />

            <main className="md:ml-64 p-6 md:p-10 max-w-6xl mx-auto">
                {/* Page Title similar to Roblox internal pages */}
                <h1 className="text-3xl font-bold text-white mb-8">Group Payouts</h1>

                <TransferSection robux={robux} setRobux={setRobux} onAddTransaction={handleTransaction} />
                <TransactionsList transactions={transactions} />
            </main>

            {/* Custom Toast simulating Roblox standard top notification */}
            {toast && (
                <div className="fixed top-16 left-1/2 -translate-x-1/2 bg-gray-800 text-white px-6 py-3 rounded shadow-lg z-50 flex items-center gap-3 animate-fade-in border-l-4 border-green-500">
                    <span className="font-bold text-sm">{toast}</span>
                </div>
            )}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
