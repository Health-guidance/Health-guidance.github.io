import React from 'react'
import './Chatbot.css'

const Chatbot = () => {
    return (
        <div className="container bg-white d-flex flex-column align-items-center">
            <div className="card mb-3 w-50">
                <div className="card-header text-dark text-base d-flex flex-column align-items-stretch mt-2.5 max-md-max-w-full">
                    <h5 className="card-title text-center">AI H-link</h5>
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
            <div className="card mt-4 rounded-pill w-75" onMouseEnter={(e) => {
                e.currentTarget.className = 'card mt-4 shadow p-2 rounded-pill mb-5 w-75'
            }} onMouseLeave={(e) => {
                e.currentTarget.className = 'card mt-4 rounded-pill w-75'
            }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center max-w-360px">
                    <div className="text-dark text-base leading-5 max-w-271px">I feel feverish and cold</div>
                    <div className="text-muted text-base leading-5 max-w-302px mt-3">What could be the cause?</div>
                </div>
            </div>
            <div className="card mt-4 rounded-pill w-75" onMouseEnter={(e) => {
                e.currentTarget.className = 'card mt-4 shadow p-2 rounded-pill mb-5 w-75'
            }} onMouseLeave={(e) => {
                e.currentTarget.className = 'card mt-4 rounded-pill w-75'
            }} >
                <div className="card-body d-flex flex-column align-items-center justify-content-center max-w-360px">
                    <div className="text-dark text-base leading-5 max-w-271px">My head aches</div>
                    <div className="text-muted text-base leading-5 max-w-302px mt-2">How can I treat headaches?</div>
                </div>
            </div>
            <div className="card mt-4 rounded-pill w-75" onMouseEnter={(e) => {
                e.currentTarget.className = 'card mt-4 shadow p-2 rounded-pill mb-5 w-75'
            }} onMouseLeave={(e) => {
                e.currentTarget.className = 'card mt-4 rounded-pill w-75'

            }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center max-w-360px">
                    <div className="text-dark text-base leading-5 max-w-271px">How can I stop abdominal pains?</div>
                    <div className="text-muted text-base leading-5 max-w-302px mt-2">When should I see a doctor?</div>
                </div>
            </div>
            <div className="card mt-4  rounded-pill mb-5 w-75" onMouseEnter={(e) => {
                e.currentTarget.className = 'card mt-4 shadow p-2 rounded-pill mb-5 w-75'
            }} onMouseLeave={(e) => {
                e.currentTarget.className = 'card mt-4 rounded-pill mb-5 w-75'
            }}>
                <div className="card-body d-flex flex-column align-items-center justify-content-center max-w-360px">
                    <div className="text-dark text-base leading-5 max-w-271px">How can I treat hot water burns?</div>
                    <div className="text-muted text-base leading-5 max-w-302px mt-3">Home remedies for hot water burns</div>
                </div>
            </div>
            <form className="form-floating w-75 d-flex rounded-pill">


                <input type="email" class="form-control rounded-pill" id="floatingInput" placeholder="Input message here" />
                <label htmlFor='floatingInput' >Input message</label>

                <img style={{ width: "2%", height: "0%", alignSelf: 'center' }} src={require('./Send.png')} />


            </form>
            <div className="text-dark text-center text-sm leading-4 underline text-center mt-3">
                <a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" rel='noreferrer' target="_blank">
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