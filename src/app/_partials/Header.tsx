import Link from 'next/link'

export default function Header() {
    return (
        <header style={{
          padding: '0 20px',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #eaeaea',
          backgroundColor: '#ffffff',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', backgroundColor: '#007bff', borderRadius: '6px' }}></div>
            <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>MyNextApp</span>
          </div>
          <nav style={{ display: 'flex', gap: '20px' }}>
            <Link href="/" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>Trang chủ</Link>
            <Link href="/about" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>About</Link>
            <Link href="/detail" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>Detail</Link>
            <Link href="/products" style={{ textDecoration: 'none', color: '#666', fontSize: '14px' }}>Product</Link>
          </nav>
        </header>
    )
}