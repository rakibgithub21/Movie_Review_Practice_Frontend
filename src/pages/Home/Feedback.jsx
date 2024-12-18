
const Feedback = () => {
    return (
        <section className="py-6 bg-gradient-to-r from-rose-100 to-red-50 mt-10 rounded-lg  raleway">
            <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <div className="py-6 md:py-0 text-slate-800 md:px-6">
                    <h1 className="text-2xl lg:text-4xl font-bold">Your Feedback Matters!</h1>
                    <p className="pt-2 pb-4">Fill in the form to share your experience</p>
                    <div className="space-y-4 text-slate-800 font-medium">
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                            </svg>
                            <span>456 Phetchaburi Road, Bangkok 10400, Thailand</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                            </svg>
                            <span>+66 81 234 5678</span>
                        </p>
                        <p className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                            <span>contact@exploreseasia.com</span>
                        </p>
                    </div>
                </div>
                <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
                    <label className="input input-bordered flex bg-red-200 items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input  required type="text" className="grow placeholder:text-black text-black" placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center bg-red-200 gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input required type="text" className="grow text-black placeholder:text-black" placeholder="Email" />
                    </label>
                    <label className="block">

                        <textarea data-tooltip-id="my-tooltip-4" required rows={3} className="textarea placeholder:text-black bg-red-200 textarea-bordered textarea-lg text-black w-full " ></textarea>
                    </label>
                    <button data-tooltip-id="my-tooltip-3" type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 bg-violet-600 text-gray-50 focus:ring-violet-600 hover:ring-violet-600">Feedback</button>
                </form>
            </div>
        </section>
    );
};

export default Feedback;