import React from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import {Link} from 'react-router-dom';

const style = {
  row: {
    textAlign: 'left',
    backgroundColor: '#282e30',
    color: 'white',
    width: '100%'
  },
  grid: {
    padding: '50px 0px',
  },
  subjectTitle: {
    fontSize: '18px',
    color: 'white',
    margin: '0px 0px 15px',
  },
  subjectText: {
    fontSize: '14px',
    color: 'rgb(119, 126, 128)',
  },
};

const colProps = {
  outer: {
    xs: 12,
    sm: 3,
  },
  inner: {
    xs: 6,
    sm: 12,
    style: {
      marginBottom: '7px',
    }
  }
};

const footer = [
  {
    title: '关于我们',
    children: [
      {
        text: '公司概况',
        to: '/'
      },
      {
        text: '隐私声明',
        to: '/aboutUs'
      },
      {
        text: '服务条款',
        to: '/aboutUs'
      }
    ]
  }, {
    title: '产品',
    children: [
      {
        text: '产品概述',
        to: '/product'
      }
    ],
  }, {
    title: '联系我们',
    children: [
      {
        text: '邮箱地址：hr@civeno.com',
        email: 'hr@civeno.com',
      }
    ]
  }
];

export default function() {
  return (
    <Row style={style.row}>
      <Grid style={style.grid}>
        <Col {...colProps.outer} style={{ textAlign: 'center' }} xsHidden>
          <Logo />
        </Col>
        {footer.map((subject, subjectIndex) => (
          <Col {...colProps.outer} key={`footer_${subjectIndex}`} style={{ margin: '15px 0px' }}>
            <Row><Col xs={12} style={style.subjectTitle}>{subject.title}</Col></Row>
            <Row>
              {subject.children.map((item, itemIndex) => (
                <Col {...colProps.inner} key={`footer_${subjectIndex}_item_${itemIndex}`}>
                  <CustomLink item={item}/>
                </Col>
              ))}
            </Row>
          </Col>
        ))}
      </Grid>
    </Row>
  );
}

function scrollToHeader() {
  window.scrollTo(0, 0);
}

function CustomLink({ item }) {
  if (item.to) {
    return <Link style={style.subjectText} to={item.to} onClick={scrollToHeader}>{item.text}</Link>;
  }
  if (item.email) {
    return <a style={style.subjectText} href={`mailto:${item.email}`}>{item.text}</a>;
  }
  return <a style={style.subjectText}>{item.text}</a>;
}

function Logo() {
  const props = {
    src: "/resource/logo_GR.png",
    style: { width: '50%', maxWidth: '250px' },
  };
  const smStyle = { ...props.style, marginTop: '20px' };
  const mdStyle = { ...props.style, marginTop: '12px' };
  return (
    <div xsHidden>
      <Col smHidden mdHidden>
        <img {...props}/>
      </Col>
      <Col smHidden lgHidden>
        <img {...props} style={mdStyle}/>
      </Col>
      <Col mdHidden lgHidden>
        <img {...props} style={smStyle}/>
      </Col>
    </div>
  )
  return <img {...props}/>
}