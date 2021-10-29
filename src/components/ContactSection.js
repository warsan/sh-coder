import React from 'react';
import _ from 'lodash';

export default class ContactSection extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const title = _.get(section, 'title');

        return (
            <section className="section">
                <div className="container container--md">
                    {title && <h2 className="section__title align-center">{title}</h2>}
                    <form name="contactForm" id="contactForm" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
                        <div className="sr-only">
                            <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                            <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                        </div>
                        <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                        <div className="form-group">
                            <label id="name-label" htmlFor="name">Имя</label>
                            <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="Ваше имя" required />
                        </div>
                        <div className="form-group">
                            <label id="email-label" htmlFor="email">Email</label>
                            <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Ваш e-mail" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Тема</label>
                            <div className="form-select-wrap">
                                <select name="subject" id="subject">
                                    <option value="">Пожалуйста, выберите</option>
                                    <option value="Business Inquiries">Business Inquiries</option>
                                    <option value="Sponsorship">Partnerships</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label id="message-label" htmlFor="message">Сообщение</label>
                            <textarea aria-labelledby="message-label" name="message" id="message" rows="5" placeholder="Ваше сообщение" />
                        </div>
                        <div className="form-group form-checkbox">
                            <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                            <label id="consent-label" htmlFor="consent">Я понимаю, что эта форма сохраняет предоставленную мной информацию, чтобы со мной можно было связаться.</label>
                        </div>
                        <div className="form-submit">
                            <button type="submit" className="button">Свяжитесь с нами</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}
