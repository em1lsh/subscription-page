import type { CSSProperties } from 'react'

const streams = [
    '010010110100101101001011',
    'アイウエオカキクケコサシスセソ',
    '101101001011010010110100',
    'タチツテトナニヌネノハヒフヘホ',
    '001101011001010110010101',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '110010100101101001011010',
    'マミムメモヤユヨラリルレロワヲン',
    '011010010110100101101001',
    'SYSTEM ACCESS VERIFIED',
    '100101101001011010010110',
    'SECURE PRIVATE CONNECTED'
]

export function MatrixBackdrop() {
    return (
        <div aria-hidden="true" className="matrix-scene">
            <div className="matrix-aurora" />
            <div className="matrix-grid" />
            <div className="matrix-rain">
                {streams.map((stream, index) => (
                    <span
                        className="matrix-stream"
                        key={`${stream}-${index}`}
                        style={
                            {
                                '--stream-left': `${3.5 + index * 8.35}%`,
                                '--stream-delay': `${-(index * 1.37)}s`,
                                '--stream-duration': `${14 + (index % 5) * 2.25}s`
                            } as CSSProperties
                        }
                    >
                        {stream}
                    </span>
                ))}
            </div>
            <div className="matrix-vignette" />
            <div className="matrix-noise" />
        </div>
    )
}
