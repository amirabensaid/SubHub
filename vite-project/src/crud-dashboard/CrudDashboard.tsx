import { useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import InputAdornment from '@mui/material/InputAdornment';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People';
import DashboardIcon from '@mui/icons-material/Dashboard';


interface Customer {
  id: number;
  name: string;
  email: string;
  company: string;
}

const initialCustomers: Customer[] = [
  { id: 1, name: 'Alicia Chen', email: 'alicia@example.com', company: 'Northwind' },
  { id: 2, name: 'Marcus Reed', email: 'marcus@example.com', company: 'Blue Peak' },
  { id: 3, name: 'Nina Patel', email: 'nina@example.com', company: 'Lumen Labs' },
];

export default function CrudDashboard() {
  const [customers, setCustomers] = useState<Customer[]>(initialCustomers);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [search, setSearch] = useState('');

  const totalCustomers = useMemo(() => customers.length, [customers]);
  const activeCustomers = useMemo(() => customers.filter((customer) => customer.company).length, [customers]);
  const filteredCustomers = useMemo(() => {
    const query = search.toLowerCase();
    return customers.filter((customer) =>
      [customer.name, customer.email, customer.company].some((value) => value.toLowerCase().includes(query)),
    );
  }, [customers, search]);

  const resetForm = () => {
    setForm({ name: '', email: '', company: '' });
    setEditingId(null);
  };

  const handleOpenCreate = () => {
    resetForm();
    setOpen(true);
  };

  const handleOpenEdit = (customer: Customer) => {
    setEditingId(customer.id);
    setForm({ name: customer.name, email: customer.email, company: customer.company });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  const handleSave = () => {
    if (!form.name || !form.email || !form.company) {
      return;
    }

    if (editingId) {
      setCustomers((current) =>
        current.map((customer) =>
          customer.id === editingId ? { ...customer, ...form } : customer,
        ),
      );
    } else {
      setCustomers((current) => [
        ...current,
        { id: Date.now(), ...form },
      ]);
    }

    handleClose();
  };

  const handleDelete = (id: number) => {
    setCustomers((current) => current.filter((customer) => customer.id !== id));
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, backgroundColor: 'background.default', minHeight: '100vh' }}>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Paper sx={{ width: { xs: '100%', md: 260 }, p: 2, borderRadius: 3, boxShadow: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            SubHub Admin
          </Typography>
          <List disablePadding>
            <ListItemButton selected>
              <DashboardIcon sx={{ mr: 1 }} />
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton>
              <PeopleIcon sx={{ mr: 1 }} />
              <ListItemText primary="Customers" />
            </ListItemButton>
          </List>
        </Paper>

        <Box sx={{ flex: 1 }}>
          <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
              <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', md: 'center' } }}>
                <Box>
                  <Typography variant="h4" component="h1">
                    CRUD Dashboard
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    Manage your customers with create, read, update, and delete actions.
                  </Typography>
                </Box>
                <Button variant="contained" onClick={handleOpenCreate}>
                  Add customer
                </Button>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
                <Chip label={`${totalCustomers} total`} color="primary" variant="outlined" />
                <Chip label={`${activeCustomers} active companies`} color="success" variant="outlined" />
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <TextField
                fullWidth
                size="small"
                placeholder="Search customers"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  },
                }}
                sx={{ mb: 2 }}
              />

              <Typography variant="h6" sx={{ mb: 2 }}>
                Customer list
              </Typography>
              {filteredCustomers.length === 0 ? (
                <Box sx={{ py: 4, textAlign: 'center', border: '1px dashed', borderColor: 'divider', borderRadius: 2 }}>
                  <Typography color="text.secondary">No matching customers found.</Typography>
                </Box>
              ) : (
                <Stack spacing={2}>
                  {filteredCustomers.map((customer) => (
                    <Card key={customer.id} variant="outlined" sx={{ borderRadius: 2 }}>
                      <CardContent>
                        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' } }}>
                          <Box>
                            <Typography variant="subtitle1">{customer.name}</Typography>
                            <Typography color="text.secondary">{customer.email}</Typography>
                            <Typography color="text.secondary">{customer.company}</Typography>
                          </Box>
                          <Stack direction="row" spacing={1}>
                            <Button size="small" variant="outlined" onClick={() => handleOpenEdit(customer)}>
                              Edit
                            </Button>
                            <Button size="small" color="error" variant="outlined" onClick={() => handleDelete(customer.id)}>
                              Delete
                            </Button>
                          </Stack>
                        </Stack>
                      </CardContent>
                    </Card>
                  ))}
                </Stack>
              )}
            </CardContent>
          </Card>
        </Box>
      </Stack>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>{editingId ? 'Edit customer' : 'Create customer'}</DialogTitle>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Name"
              value={form.name}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              fullWidth
            />
            <TextField
              label="Email"
              value={form.email}
              onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              fullWidth
            />
            <TextField
              label="Company"
              value={form.company}
              onChange={(event) => setForm((current) => ({ ...current, company: event.target.value }))}
              fullWidth
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave} variant="contained">
            {editingId ? 'Save changes' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
