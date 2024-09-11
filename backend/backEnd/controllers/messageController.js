
const appointments = require('../../data/appointments');

exports.getMessages = (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).send('Acceso denegado');
    }
    res.status(200).json(mensajes);
};

exports.postMessage = (req, res) => {
    const { nombre, email, mensaje } = req.body;
    console.log('Mensaje recibido:', { nombre, email, mensaje });
    res.status(200).json({ message: 'Mensaje recibido correctamente' });
};

exports.postHour=(req, res) => {
    const { date, time } = req.body;
    // Lógica para manejar la fecha y hora recibida
    console.log(`Fecha recibida: ${date}`);
    console.log(`Hora recibida: ${time}`);
  
    // Puedes responder con un mensaje de éxito
    res.status(200).json({ message: 'Datos recibidos correctamente' });
};

// exports.getAppointment = (req, res) => {
//     try {
//         // Validar si se requieren parámetros específicos
//         const { day, hour } = req.query;

//         // Si se proporciona un día específico, filtramos las citas para ese día
//         if (day && hour) {
//             // Verifica si el día y la hora están disponibles
//             if (appointments[day] && appointments[day][hour] !== undefined) {
//                 res.status(200).json({ available: appointments[day][hour] });
//             } else {
//                 res.status(404).json({ message: 'Día o hora no encontrados' });
//             }
//         } else {
//             // Si no se proporcionan parámetros, devuelve el horario completo
//             res.status(200).json(appointments);
//         }
//     } catch (error) {
//         console.error('Error al obtener las citas:', error);
//         res.status(500).json({ message: 'Error interno del servidor' });
//     }
// };
exports.getAppointment = (req, res) => {
    try {
        // Validar si se requieren parámetros específicos
        const { day, hour } = req.query;

        // Si se proporciona un día específico, filtramos las citas para ese día
        if (day && hour) {
            // Verifica si el día y la hora están disponibles
            if (appointments[day] && appointments[day][hour] !== undefined) {
                res.status(200).json({ available: appointments[day][hour] });
            } else {
                res.status(404).json({ message: 'Día o hora no encontrados' });
            }
        } else {
            // Si no se proporcionan parámetros, devuelve el horario completo
            res.status(200).json(appointments);
        }
    } catch (error) {
        console.error('Error al obtener las citas:', error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};
