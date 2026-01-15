export default function Footer() {
    return (
        <footer style={{
          padding: '40px 20px',
          borderTop: '1px solid #eaeaea',
          backgroundColor: '#fafafa',
          textAlign: 'center'
        }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontWeight: 'bold', fontSize: '1rem', color: '#333' }}>MyNextApp</span>
            <p style={{ color: '#888', fontSize: '14px', marginTop: '10px' }}>
              Ứng dụng được xây dựng với Next.js và Gemini AI.
            </p>
          </div>
          <div style={{ fontSize: '12px', color: '#aaa' }}>
            &copy; {new Date().getFullYear()} Bản quyền thuộc về tôi.
          </div>
        </footer>
    )
}