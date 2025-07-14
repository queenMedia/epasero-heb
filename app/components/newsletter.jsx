import React from "react";

export const Newsletter = () => {
  return (
    <div className="source">
      <div className="elementor-element elementor-element-563382e e-flex e-con-boxed e-con e-parent">
        <div className="e-con-inner">
          <div
            className="elementor-element elementor-element-98a29ca e-con-full e-flex e-con e-child"
            data-id="98a29ca"
            data-element_type="container"
            data-settings='{"background_background":"classNameic","jet_parallax_layout_list":[]}'
          >
            <div
              className="elementor-element elementor-element-f8d11be elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-hidden-tablet elementor-widget elementor-widget-image"
              data-id="f8d11be"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  width="800"
                  height="548"
                  src="assets/book.png"
                  className="attachment-large size-large wp-image-3891 perfmatters-lazy entered pmloaded"
                  alt=""
                  data-src="assets/book.png"
                  data-sizes="(max-width: 800px) 100vw, 800px"
                  data-ll-status="loaded"
                  sizes="(max-width: 800px) 100vw, 800px"
                />
              </div>
            </div>
            <div
              className="elementor-element elementor-element-ef91cbc e-con-full e-flex e-con e-child"
              data-id="ef91cbc"
              data-element_type="container"
              data-settings='{"jet_parallax_layout_list":[]}'
            >
              <div
                className="elementor-element elementor-element-609c85b elementor-widget elementor-widget-heading"
                data-id="609c85b"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <h4 className="elementor-heading-title elementor-size-default">
                    המדריך הבלעדי להשקעות בדובאי קבל את המדריך חינם
                  </h4>{" "}
                </div>
              </div>
              <div
                className="elementor-element elementor-element-5494490 elementor-widget elementor-widget-heading"
                data-id="5494490"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div className="elementor-widget-container">
                  <p className="elementor-heading-title elementor-size-default">
                    השאר פרטים וקבל גישה מיידית למידע בלעדי
                  </p>{" "}
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-bad100a elementor-widget__width-initial elementor-widget-tablet__width-inherit elementor-button-align-stretch elementor-widget elementor-widget-form"
              data-id="bad100a"
              data-element_type="widget"
              data-settings='{"step_next_label":"\u05d4\u05d1\u05d0","step_previous_label":"\u05d4\u05e7\u05d5\u05d3\u05dd","button_width":"25","step_type":"number_text","step_icon_shape":"circle"}'
              data-widget_type="form.default"
            >
              <div className="elementor-widget-container">
                <form className="elementor-form" method="post" name="ניוזלטר">
                  <input type="hidden" name="post_id" value="739" />
                  <input type="hidden" name="form_id" value="bad100a" />
                  <input
                    type="hidden"
                    name="referer_title"
                    value='Mayors Luxury Estate | ליווי מקצועי להשקעה בנדל"ן בדובאי'
                  />

                  <input type="hidden" name="queried_id" value="2" />

                  <div className="elementor-form-fields-wrapper elementor-labels-">
                    <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-your_name elementor-col-33 elementor-field-required">
                      <label
                        htmlFor="form-field-your_name"
                        className="elementor-field-label elementor-screen-only"
                      >
                        שם מלא{" "}
                      </label>
                      <input
                        size="1"
                        type="text"
                        name="form_fields[your_name]"
                        id="form-field-your_name"
                        className="elementor-field elementor-size-md  elementor-field-textual"
                        placeholder="שם מלא"
                        required="required"
                      />
                    </div>
                    <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-33 elementor-field-required">
                      <label
                        htmlFor="form-field-email"
                        className="elementor-field-label elementor-screen-only"
                      >
                        אימייל{" "}
                      </label>
                      <input
                        size="1"
                        type="email"
                        name="form_fields[email]"
                        id="form-field-email"
                        className="elementor-field elementor-size-md  elementor-field-textual"
                        placeholder="אימייל"
                        required="required"
                      />
                    </div>
                    <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-phone elementor-col-33 elementor-field-required">
                      <label
                        htmlFor="form-field-phone"
                        className="elementor-field-label elementor-screen-only"
                      >
                        טלפון{" "}
                      </label>
                      <input
                        size="1"
                        type="tel"
                        name="form_fields[phone]"
                        id="form-field-phone"
                        className="elementor-field elementor-size-md  elementor-field-textual"
                        placeholder="טלפון"
                        required="required"
                        pattern="[0-9()#&amp;+*-=.]+"
                        title="מותר להשתמש רק במספרים ותווי טלפון (#, -, *, וכו')."
                      />
                    </div>
                    <div className="elementor-field-type-acceptance elementor-field-group elementor-column elementor-field-group-terms elementor-col-100">
                      <div className="elementor-field-subgroup">
                        <span className="elementor-field-option">
                          {/* <input
                            type="checkbox"
                            name="form_fields[terms]"
                            id="form-field-terms"
                            className="elementor-field elementor-size-md  elementor-acceptance-field"
                          />
                          {/* <label htmlFor="form-field-terms">
                            אני מסכים למסור את פרטיי בהתאם ל
                            <a href="/terms/">
                              <u>מדיניות הפרטיות</u> ו<u>תנאי השימוש</u>
                            </a>
                            .
                          </label>{" "} */}
                        </span>
                      </div>
                    </div>
                    <div className="elementor-field-type-acceptance elementor-field-group elementor-column elementor-field-group-marketing elementor-col-100">
                      <div className="elementor-field-subgroup">
                        <span className="elementor-field-option">
                          <input
                            type="checkbox"
                            name="form_fields[marketing]"
                            id="form-field-marketing"
                            style={{ marginLeft: 8 }}
                            className="elementor-field elementor-size-md  elementor-acceptance-field"
                          />
                          <label htmlFor="form-field-marketing">
                            אני מסכים לקבל מידע על הזדמנויות השקעה ועדכונים
                            מקצועיים
                          </label>{" "}
                        </span>
                      </div>
                    </div>
                    <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-25 e-form__buttons">
                      <button
                        className="elementor-button elementor-size-md"
                        type="submit"
                      >
                        <span className="elementor-button-content-wrapper">
                          <span className="elementor-button-text">שליחה</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
