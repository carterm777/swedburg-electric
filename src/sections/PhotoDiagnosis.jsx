import { Camera, Check, Phone } from 'lucide-react'
import { usePhotoDiagnosis } from '../lib/usePhotoDiagnosis.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../lib/site.js'
import './widget.css'

/* The signature element. Card-Based Widget Container read as a letterpress
   certificate plate: a brass hairline frame with a second inset rule, four
   corner brackets, underline-only fields, and no drop zone dashes anywhere. */
export default function PhotoDiagnosis() {
  const pd = usePhotoDiagnosis()
  const {
    preview, file, dragging, fields, errors, status,
    inputRef, openPicker, onFileInput, clearPhoto, dropProps,
    setField, submit, reset, accepted,
  } = pd

  const done = status === 'done'

  return (
    <div className="pd" data-state={status}>
      <span className="pd-corner pd-corner--tl" aria-hidden="true" />
      <span className="pd-corner pd-corner--tr" aria-hidden="true" />
      <span className="pd-corner pd-corner--bl" aria-hidden="true" />
      <span className="pd-corner pd-corner--br" aria-hidden="true" />

      <div className="pd-inner">
        {done ? (
          <div className="pd-done">
            <span className="pd-seal" aria-hidden="true">
              <Check className="lucide" />
            </span>
            <h2 className="pd-title pd-title--done">Photo Received</h2>
            <p className="pd-body">
              Thanks, {fields.name.trim().split(' ')[0] || 'and welcome'}. We have your photo and
              your note. We&rsquo;ll call you back at {fields.phone} during shop hours —
              Monday to Friday, 8am to 5pm.
            </p>
            <span className="rule rule--brass pd-done-rule" />
            <div className="pd-done-actions">
              <a className="btn btn--brass btn--wide" href={PHONE_TEL}>
                <Phone className="lucide" aria-hidden="true" />
                Call {PHONE_DISPLAY} Now
              </a>
              <button type="button" className="tlink pd-again" onClick={reset}>
                Send another photo
              </button>
            </div>
          </div>
        ) : (
          <form className="pd-form" onSubmit={submit} noValidate>
            <div className="pd-head">
              <span className="caps caps--sm caps--brass">Photo Diagnosis</span>
              <Camera className="lucide pd-head-icon" aria-hidden="true" />
            </div>

            <h2 className="pd-title">Send A Photo, Get A Straight Answer</h2>
            <p className="pd-body">
              Attach a photo of the panel, fixture or outlet in question. We&rsquo;ll tell you
              what we&rsquo;re looking at and what it would take to put right.
            </p>

            <div className="pd-field pd-field--plate">
              {!preview ? (
                <button
                  type="button"
                  className="pd-plate"
                  data-drag={dragging ? 'true' : 'false'}
                  onClick={openPicker}
                  {...dropProps}
                >
                  <Camera className="lucide pd-plate-icon" aria-hidden="true" />
                  <span className="pd-plate-text">
                    <span className="caps caps--sm pd-plate-title">Add A Photo</span>
                    <span className="pd-plate-note">
                      JPG, PNG or HEIC · up to 10MB · optional
                    </span>
                  </span>
                </button>
              ) : (
                <div className="pd-plate pd-plate--filled" {...dropProps}>
                  <img className="pd-shot" data-bloom src={preview} alt="The photo you attached" />
                  <span className="pd-shot-bar">
                    <span className="pd-file">{file?.name}</span>
                    <span className="pd-shot-actions">
                      <button type="button" className="pd-mini" onClick={openPicker}>Replace</button>
                      <button type="button" className="pd-mini" onClick={clearPhoto}>Remove</button>
                    </span>
                  </span>
                </div>
              )}
              <input
                ref={inputRef}
                type="file"
                accept={accepted}
                onChange={onFileInput}
                className="sr-only"
                tabIndex={-1}
                aria-hidden="true"
              />
              {errors.file && <p className="pd-error" role="alert">{errors.file}</p>}
            </div>

            <div className="pd-field">
              <label className="caps caps--sm pd-label" htmlFor="pd-desc">
                What&rsquo;s Going On
              </label>
              <textarea
                id="pd-desc"
                className="pd-input pd-textarea"
                rows={2}
                placeholder="Two breakers keep tripping in the basement since the reno started."
                value={fields.description}
                onChange={setField('description')}
                aria-invalid={errors.description ? 'true' : undefined}
              />
              {errors.description && <p className="pd-error" role="alert">{errors.description}</p>}
            </div>

            <div className="pd-row">
              <div className="pd-field">
                <label className="caps caps--sm pd-label" htmlFor="pd-name">Name</label>
                <input
                  id="pd-name"
                  className="pd-input"
                  type="text"
                  autoComplete="name"
                  placeholder="Heather Nolan"
                  value={fields.name}
                  onChange={setField('name')}
                  aria-invalid={errors.name ? 'true' : undefined}
                />
                {errors.name && <p className="pd-error" role="alert">{errors.name}</p>}
              </div>
              <div className="pd-field">
                <label className="caps caps--sm pd-label" htmlFor="pd-phone">Phone</label>
                <input
                  id="pd-phone"
                  className="pd-input"
                  type="tel"
                  autoComplete="tel"
                  placeholder="403 555 0147"
                  value={fields.phone}
                  onChange={setField('phone')}
                  aria-invalid={errors.phone ? 'true' : undefined}
                />
                {errors.phone && <p className="pd-error" role="alert">{errors.phone}</p>}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn--brass btn--wide pd-submit"
              data-sending={status === 'sending' ? 'true' : 'false'}
            >
              {status === 'sending' ? 'Sending…' : 'Send The Photo'}
            </button>

            <p className="pd-note">
              No cost and no obligation. Your number stays with us — we use it to answer your
              question and nothing else.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
