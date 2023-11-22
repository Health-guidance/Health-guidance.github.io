import React from 'react'

const Chatbot = () => {
    return (
        <div className="container bg-white d-flex flex-column">
            <div className="card mb-3">
                <div className="card-header text-dark text-base d-flex flex-column align-items-stretch mt-2.5 max-md-max-w-full">
                    <h5 className="card-title">AI H-link</h5>
                </div>
            </div>
            <div className="text-dark text-center text-base font-semibold leading-7 tracking-wider text-center max-w-326px mt-20 max-md-mt-10">
                Welcome to HealthLink!
            </div>
            <div className="text-dark text-center text-xs leading-6 tracking-wide text-center max-w-332px mt-5">
                Tell us what you're experiencing. Are you feeling feverish, nauseous, or
                experiencing any pain? You can type your symptoms or select from the
                list below
            </div>
            <div className="card mt-14">
                <div className="card-body d-flex flex-column align-items-center justify-content-center max-w-360px">
                    <div className="text-dark text-base leading-5 max-w-271px">I feel feverish and cold</div>
                    <div className="text-muted text-base leading-5 max-w-302px mt-3">What could be the cause?</div>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-body d-flex flex-column align-items-center justify-content-center max-w-360px">
                    <div className="text-dark text-base leading-5 max-w-271px">My head aches</div>
                    <div className="text-muted text-base leading-5 max-w-302px mt-2">How can I treat headaches?</div>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-body d-flex flex-column align-items-center justify-content-center max-w-360px">
                    <div className="text-dark text-base leading-5 max-w-271px">How can I stop abdominal pains?</div>
                    <div className="text-muted text-base leading-5 max-w-302px mt-2">When should I see a doctor?</div>
                </div>
            </div>
            <div className="card mt-4">
                <div className="card-body d-flex flex-column align-items-center justify-content-center max-w-360px">
                    <div className="text-dark text-base leading-5 max-w-271px">How can I treat hot water burns?</div>
                    <div className="text-muted text-base leading-5 max-w-302px mt-3">Home remedies for hot water burns</div>
                </div>
            </div>
            <div className="card d-flex justify-content-between align-items-center mt-36 px-3 py-4 rounded-2xl">
                <button className="btn btn-primary grow shrink basis-auto">Send a message</button>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e7b137f-dba9-46c0-a621-65a2d700ae37?apiKey=9a437da56f594c71b21a541f7ee14f1e" className="img-fluid" alt="" />
            </div>
            <div className="text-dark text-center text-sm leading-4 underline text-center mt-3">
                <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank">
                    ChatGPT August 3 Version
                </a>
            </div>
            <p className="text-dark text-center text-sm leading-4 underline text-center mt-3">
                Discliamer. HealthLink provides preliminary guidance based on the
                symptoms described. It is not a substitute for professional medical
                advice. Always consult a healthcare provider for accurate diagnosis and
                treatment.
            </p>
        </div>
    )
}

export default Chatbot