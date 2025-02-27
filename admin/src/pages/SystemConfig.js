import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

const SystemConfig = () => {
  const [categories, setCategories] = useState([
    'IT Equipment',
    'Furniture',
    'Office Supplies'
  ]);
  const [departments, setDepartments] = useState([
    'HR',
    'IT',
    'Finance',
    'Procurement',
    'Operations'
  ]);
  const [urgencyLevels, setUrgencyLevels] = useState(['Low', 'Medium', 'High']);
  const [newCategory, setNewCategory] = useState('');
  const [newDepartment, setNewDepartment] = useState('');
  const [newUrgency, setNewUrgency] = useState('');

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleAddDepartment = (e) => {
    e.preventDefault();
    if (newDepartment.trim()) {
      setDepartments([...departments, newDepartment.trim()]);
      setNewDepartment('');
    }
  };

  

  return (
    <div
      className="container-fluid p-4"
      style={{ minHeight: '100vh', backgroundColor: '#f0f2f5' }}
    >
      <h1 className="mb-4 text-center">System Configuration</h1>
      <p className="text-center mb-4">
        Configure asset categories, departments, urgency levels, and other system settings.
      </p>

      <Row className="mb-4">
        {/* Asset Categories Card */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header style={{ backgroundColor: '#007bff', color: '#fff' }}>
              <h5 className="mb-0">Asset Categories</h5>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {categories.map((cat, index) => (
                  <li key={index} className="mb-2">
                    {cat}
                  </li>
                ))}
              </ul>
              <Form onSubmit={handleAddCategory}>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    placeholder="Add new category"
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">
                  Add Category
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Departments Card */}
        <Col md={6} className="mb-4">
          <Card className="shadow-sm h-100">
            <Card.Header style={{ backgroundColor: '#17a2b8', color: '#fff' }}>
              <h5 className="mb-0">Departments</h5>
            </Card.Header>
            <Card.Body>
              <ul className="list-unstyled">
                {departments.map((dep, index) => (
                  <li key={index} className="mb-2">
                    {dep}
                  </li>
                ))}
              </ul>
              <Form onSubmit={handleAddDepartment}>
                <Form.Group className="mb-2">
                  <Form.Control
                    type="text"
                    value={newDepartment}
                    onChange={(e) => setNewDepartment(e.target.value)}
                    placeholder="Add new department"
                  />
                </Form.Group>
                <Button type="submit" variant="primary" className="w-100">
                  Add Department
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Urgency Levels Card */}
      
    </div>
  );
};

export default SystemConfig;
